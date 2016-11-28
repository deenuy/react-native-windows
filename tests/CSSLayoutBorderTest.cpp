/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

 // @Generated by gentest/gentest.rb from gentest/fixtures/CSSLayoutBorderTest.html

#include <CSSLayout/CSSLayout.h>
#include <gtest/gtest.h>

TEST(CSSLayoutTest, border_no_size) {
  const CSSNodeRef root = CSSNodeNew();
  CSSNodeStyleSetBorder(root, CSSEdgeLeft, 10);
  CSSNodeStyleSetBorder(root, CSSEdgeTop, 10);
  CSSNodeStyleSetBorder(root, CSSEdgeRight, 10);
  CSSNodeStyleSetBorder(root, CSSEdgeBottom, 10);
  CSSNodeCalculateLayout(root, CSSUndefined, CSSUndefined, CSSDirectionLTR);

  ASSERT_FLOAT_EQ(0, CSSNodeLayoutGetLeft(root));
  ASSERT_FLOAT_EQ(0, CSSNodeLayoutGetTop(root));
  ASSERT_FLOAT_EQ(20, CSSNodeLayoutGetWidth(root));
  ASSERT_FLOAT_EQ(20, CSSNodeLayoutGetHeight(root));

  CSSNodeCalculateLayout(root, CSSUndefined, CSSUndefined, CSSDirectionRTL);

  ASSERT_FLOAT_EQ(0, CSSNodeLayoutGetLeft(root));
  ASSERT_FLOAT_EQ(0, CSSNodeLayoutGetTop(root));
  ASSERT_FLOAT_EQ(20, CSSNodeLayoutGetWidth(root));
  ASSERT_FLOAT_EQ(20, CSSNodeLayoutGetHeight(root));

  CSSNodeFreeRecursive(root);
}

TEST(CSSLayoutTest, border_container_match_child) {
  const CSSNodeRef root = CSSNodeNew();
  CSSNodeStyleSetBorder(root, CSSEdgeLeft, 10);
  CSSNodeStyleSetBorder(root, CSSEdgeTop, 10);
  CSSNodeStyleSetBorder(root, CSSEdgeRight, 10);
  CSSNodeStyleSetBorder(root, CSSEdgeBottom, 10);

  const CSSNodeRef root_child0 = CSSNodeNew();
  CSSNodeStyleSetWidth(root_child0, 10);
  CSSNodeStyleSetHeight(root_child0, 10);
  CSSNodeInsertChild(root, root_child0, 0);
  CSSNodeCalculateLayout(root, CSSUndefined, CSSUndefined, CSSDirectionLTR);

  ASSERT_FLOAT_EQ(0, CSSNodeLayoutGetLeft(root));
  ASSERT_FLOAT_EQ(0, CSSNodeLayoutGetTop(root));
  ASSERT_FLOAT_EQ(30, CSSNodeLayoutGetWidth(root));
  ASSERT_FLOAT_EQ(30, CSSNodeLayoutGetHeight(root));

  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetLeft(root_child0));
  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetTop(root_child0));
  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetWidth(root_child0));
  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetHeight(root_child0));

  CSSNodeCalculateLayout(root, CSSUndefined, CSSUndefined, CSSDirectionRTL);

  ASSERT_FLOAT_EQ(0, CSSNodeLayoutGetLeft(root));
  ASSERT_FLOAT_EQ(0, CSSNodeLayoutGetTop(root));
  ASSERT_FLOAT_EQ(30, CSSNodeLayoutGetWidth(root));
  ASSERT_FLOAT_EQ(30, CSSNodeLayoutGetHeight(root));

  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetLeft(root_child0));
  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetTop(root_child0));
  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetWidth(root_child0));
  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetHeight(root_child0));

  CSSNodeFreeRecursive(root);
}

TEST(CSSLayoutTest, border_flex_child) {
  const CSSNodeRef root = CSSNodeNew();
  CSSNodeStyleSetBorder(root, CSSEdgeLeft, 10);
  CSSNodeStyleSetBorder(root, CSSEdgeTop, 10);
  CSSNodeStyleSetBorder(root, CSSEdgeRight, 10);
  CSSNodeStyleSetBorder(root, CSSEdgeBottom, 10);
  CSSNodeStyleSetWidth(root, 100);
  CSSNodeStyleSetHeight(root, 100);

  const CSSNodeRef root_child0 = CSSNodeNew();
  CSSNodeStyleSetFlexGrow(root_child0, 1);
  CSSNodeStyleSetWidth(root_child0, 10);
  CSSNodeInsertChild(root, root_child0, 0);
  CSSNodeCalculateLayout(root, CSSUndefined, CSSUndefined, CSSDirectionLTR);

  ASSERT_FLOAT_EQ(0, CSSNodeLayoutGetLeft(root));
  ASSERT_FLOAT_EQ(0, CSSNodeLayoutGetTop(root));
  ASSERT_FLOAT_EQ(100, CSSNodeLayoutGetWidth(root));
  ASSERT_FLOAT_EQ(100, CSSNodeLayoutGetHeight(root));

  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetLeft(root_child0));
  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetTop(root_child0));
  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetWidth(root_child0));
  ASSERT_FLOAT_EQ(80, CSSNodeLayoutGetHeight(root_child0));

  CSSNodeCalculateLayout(root, CSSUndefined, CSSUndefined, CSSDirectionRTL);

  ASSERT_FLOAT_EQ(0, CSSNodeLayoutGetLeft(root));
  ASSERT_FLOAT_EQ(0, CSSNodeLayoutGetTop(root));
  ASSERT_FLOAT_EQ(100, CSSNodeLayoutGetWidth(root));
  ASSERT_FLOAT_EQ(100, CSSNodeLayoutGetHeight(root));

  ASSERT_FLOAT_EQ(80, CSSNodeLayoutGetLeft(root_child0));
  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetTop(root_child0));
  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetWidth(root_child0));
  ASSERT_FLOAT_EQ(80, CSSNodeLayoutGetHeight(root_child0));

  CSSNodeFreeRecursive(root);
}

TEST(CSSLayoutTest, border_stretch_child) {
  const CSSNodeRef root = CSSNodeNew();
  CSSNodeStyleSetBorder(root, CSSEdgeLeft, 10);
  CSSNodeStyleSetBorder(root, CSSEdgeTop, 10);
  CSSNodeStyleSetBorder(root, CSSEdgeRight, 10);
  CSSNodeStyleSetBorder(root, CSSEdgeBottom, 10);
  CSSNodeStyleSetWidth(root, 100);
  CSSNodeStyleSetHeight(root, 100);

  const CSSNodeRef root_child0 = CSSNodeNew();
  CSSNodeStyleSetHeight(root_child0, 10);
  CSSNodeInsertChild(root, root_child0, 0);
  CSSNodeCalculateLayout(root, CSSUndefined, CSSUndefined, CSSDirectionLTR);

  ASSERT_FLOAT_EQ(0, CSSNodeLayoutGetLeft(root));
  ASSERT_FLOAT_EQ(0, CSSNodeLayoutGetTop(root));
  ASSERT_FLOAT_EQ(100, CSSNodeLayoutGetWidth(root));
  ASSERT_FLOAT_EQ(100, CSSNodeLayoutGetHeight(root));

  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetLeft(root_child0));
  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetTop(root_child0));
  ASSERT_FLOAT_EQ(80, CSSNodeLayoutGetWidth(root_child0));
  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetHeight(root_child0));

  CSSNodeCalculateLayout(root, CSSUndefined, CSSUndefined, CSSDirectionRTL);

  ASSERT_FLOAT_EQ(0, CSSNodeLayoutGetLeft(root));
  ASSERT_FLOAT_EQ(0, CSSNodeLayoutGetTop(root));
  ASSERT_FLOAT_EQ(100, CSSNodeLayoutGetWidth(root));
  ASSERT_FLOAT_EQ(100, CSSNodeLayoutGetHeight(root));

  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetLeft(root_child0));
  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetTop(root_child0));
  ASSERT_FLOAT_EQ(80, CSSNodeLayoutGetWidth(root_child0));
  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetHeight(root_child0));

  CSSNodeFreeRecursive(root);
}

TEST(CSSLayoutTest, border_center_child) {
  const CSSNodeRef root = CSSNodeNew();
  CSSNodeStyleSetJustifyContent(root, CSSJustifyCenter);
  CSSNodeStyleSetAlignItems(root, CSSAlignCenter);
  CSSNodeStyleSetBorder(root, CSSEdgeStart, 10);
  CSSNodeStyleSetBorder(root, CSSEdgeEnd, 20);
  CSSNodeStyleSetBorder(root, CSSEdgeBottom, 20);
  CSSNodeStyleSetWidth(root, 100);
  CSSNodeStyleSetHeight(root, 100);

  const CSSNodeRef root_child0 = CSSNodeNew();
  CSSNodeStyleSetWidth(root_child0, 10);
  CSSNodeStyleSetHeight(root_child0, 10);
  CSSNodeInsertChild(root, root_child0, 0);
  CSSNodeCalculateLayout(root, CSSUndefined, CSSUndefined, CSSDirectionLTR);

  ASSERT_FLOAT_EQ(0, CSSNodeLayoutGetLeft(root));
  ASSERT_FLOAT_EQ(0, CSSNodeLayoutGetTop(root));
  ASSERT_FLOAT_EQ(100, CSSNodeLayoutGetWidth(root));
  ASSERT_FLOAT_EQ(100, CSSNodeLayoutGetHeight(root));

  ASSERT_FLOAT_EQ(40, CSSNodeLayoutGetLeft(root_child0));
  ASSERT_FLOAT_EQ(35, CSSNodeLayoutGetTop(root_child0));
  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetWidth(root_child0));
  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetHeight(root_child0));

  CSSNodeCalculateLayout(root, CSSUndefined, CSSUndefined, CSSDirectionRTL);

  ASSERT_FLOAT_EQ(0, CSSNodeLayoutGetLeft(root));
  ASSERT_FLOAT_EQ(0, CSSNodeLayoutGetTop(root));
  ASSERT_FLOAT_EQ(100, CSSNodeLayoutGetWidth(root));
  ASSERT_FLOAT_EQ(100, CSSNodeLayoutGetHeight(root));

  ASSERT_FLOAT_EQ(50, CSSNodeLayoutGetLeft(root_child0));
  ASSERT_FLOAT_EQ(35, CSSNodeLayoutGetTop(root_child0));
  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetWidth(root_child0));
  ASSERT_FLOAT_EQ(10, CSSNodeLayoutGetHeight(root_child0));

  CSSNodeFreeRecursive(root);
}