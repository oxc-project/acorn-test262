__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 19,
              "end": 20
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 15,
            "end": 20
          }
        ],
        "start": 13,
        "end": 22
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnotherThing",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 41
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 48,
              "end": 49
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 44,
            "end": 49
          }
        ],
        "start": 42,
        "end": 52
      },
      "abstract": false,
      "declare": false,
      "start": 23,
      "end": 52
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 65
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 77,
              "end": 78
            },
            "start": 70,
            "end": 78
          }
        ],
        "start": 68,
        "end": 80
      },
      "expression": false,
      "start": 53,
      "end": 80
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 93
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 105,
              "end": 106
            },
            "start": 98,
            "end": 106
          }
        ],
        "start": 96,
        "end": 108
      },
      "expression": false,
      "start": 81,
      "end": 108
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 150
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 158
          },
          "optional": false,
          "computed": false,
          "start": 144,
          "end": 158
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 172
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 172
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 167,
              "end": 172
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnotherThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 190
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnotherThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 190
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 178,
              "end": 190
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 199
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 199
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 196,
              "end": 199
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "qux",
                "optional": false,
                "typeAnnotation": null,
                "start": 205,
                "end": 208
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 213
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 205,
              "end": 213
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 222
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 234,
                        "end": 235
                      },
                      "start": 227,
                      "end": 235
                    }
                  ],
                  "start": 225,
                  "end": 237
                },
                "expression": false,
                "start": 222,
                "end": 237
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 219,
              "end": 237
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "literal",
                "optional": false,
                "typeAnnotation": null,
                "start": 243,
                "end": 250
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 252,
                "end": 254
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 243,
              "end": 254
            }
          ],
          "start": 161,
          "end": 257
        },
        "start": 144,
        "end": 257
      },
      "directive": null,
      "start": 144,
      "end": 257
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 257
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "jstypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 270,
        "end": 277
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 278,
          "end": 279
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 281,
          "end": 282
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 284,
          "end": 285
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 287,
          "end": 288
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 291
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 293,
          "end": 294
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 296,
          "end": 297
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 312,
                            "end": 313
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 314,
                            "end": 315
                          },
                          "optional": false,
                          "computed": false,
                          "start": 312,
                          "end": 315
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 318,
                            "end": 319
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 320,
                            "end": 321
                          },
                          "optional": false,
                          "computed": false,
                          "start": 318,
                          "end": 321
                        },
                        "start": 312,
                        "end": 321
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 324,
                          "end": 325
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 324,
                        "end": 327
                      },
                      "start": 312,
                      "end": 327
                    },
                    "operator": "+",
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 330,
                        "end": 331
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 330,
                      "end": 333
                    },
                    "start": 312,
                    "end": 333
                  },
                  "operator": "+",
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 336,
                      "end": 337
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 336,
                    "end": 339
                  },
                  "start": 312,
                  "end": 339
                },
                "operator": "+",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 342,
                    "end": 343
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 342,
                  "end": 345
                },
                "start": 312,
                "end": 345
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 348,
                  "end": 349
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 356
                },
                "optional": false,
                "computed": false,
                "start": 348,
                "end": 356
              },
              "start": 312,
              "end": 356
            },
            "start": 305,
            "end": 356
          }
        ],
        "start": 299,
        "end": 358
      },
      "expression": false,
      "start": 261,
      "end": 358
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "jsvalues",
        "optional": false,
        "typeAnnotation": null,
        "start": 679,
        "end": 687
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 688,
          "end": 689
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 691,
          "end": 692
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 694,
          "end": 695
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 697,
          "end": 698
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 700,
          "end": 701
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 703,
          "end": 704
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 706,
          "end": 707
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 722,
                            "end": 723
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 724,
                            "end": 730
                          },
                          "optional": false,
                          "computed": false,
                          "start": 722,
                          "end": 730
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 733,
                            "end": 734
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 735,
                            "end": 741
                          },
                          "optional": false,
                          "computed": false,
                          "start": 733,
                          "end": 741
                        },
                        "start": 722,
                        "end": 741
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 744,
                          "end": 745
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 744,
                        "end": 747
                      },
                      "start": 722,
                      "end": 747
                    },
                    "operator": "+",
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 750,
                        "end": 751
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 750,
                      "end": 753
                    },
                    "start": 722,
                    "end": 753
                  },
                  "operator": "+",
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 756,
                      "end": 757
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 756,
                    "end": 759
                  },
                  "start": 722,
                  "end": 759
                },
                "operator": "+",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 762,
                    "end": 763
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 762,
                  "end": 765
                },
                "start": 722,
                "end": 765
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 768,
                  "end": 769
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 770,
                  "end": 776
                },
                "optional": false,
                "computed": false,
                "start": 768,
                "end": 776
              },
              "start": 722,
              "end": 776
            },
            "start": 715,
            "end": 776
          }
        ],
        "start": 709,
        "end": 778
      },
      "expression": false,
      "start": 670,
      "end": 778
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 261,
  "end": 779
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "types",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 14
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSImportType",
              "source": {
                "type": "Literal",
                "value": "./mod",
                "raw": "'./mod'",
                "start": 30,
                "end": 37
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 44
              },
              "typeArguments": null,
              "start": 23,
              "end": 44
            },
            "start": 21,
            "end": 44
          },
          "start": 20,
          "end": 44
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSImportType",
              "source": {
                "type": "Literal",
                "value": "./mod",
                "raw": "'./mod'",
                "start": 60,
                "end": 67
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnotherThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 81
              },
              "typeArguments": null,
              "start": 53,
              "end": 81
            },
            "start": 51,
            "end": 81
          },
          "start": 50,
          "end": 81
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSImportType",
              "source": {
                "type": "Literal",
                "value": "./mod",
                "raw": "'./mod'",
                "start": 97,
                "end": 104
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 109
              },
              "typeArguments": null,
              "start": 90,
              "end": 109
            },
            "start": 88,
            "end": 109
          },
          "start": 87,
          "end": 109
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSImportType",
              "source": {
                "type": "Literal",
                "value": "./mod",
                "raw": "'./mod'",
                "start": 125,
                "end": 132
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "decorators": [],
                "name": "qux",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 137
              },
              "typeArguments": null,
              "start": 118,
              "end": 137
            },
            "start": 116,
            "end": 137
          },
          "start": 115,
          "end": 137
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSImportType",
              "source": {
                "type": "Literal",
                "value": "./mod",
                "raw": "'./mod'",
                "start": 153,
                "end": 160
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "decorators": [],
                "name": "baz",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 165
              },
              "typeArguments": null,
              "start": 146,
              "end": 165
            },
            "start": 144,
            "end": 165
          },
          "start": 143,
          "end": 165
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSImportType",
              "source": {
                "type": "Literal",
                "value": "./mod",
                "raw": "'./mod'",
                "start": 181,
                "end": 188
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "decorators": [],
                "name": "buz",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 193
              },
              "typeArguments": null,
              "start": 174,
              "end": 193
            },
            "start": 172,
            "end": 193
          },
          "start": 171,
          "end": 193
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSImportType",
              "source": {
                "type": "Literal",
                "value": "./mod",
                "raw": "'./mod'",
                "start": 209,
                "end": 216
              },
              "options": null,
              "qualifier": {
                "type": "Identifier",
                "decorators": [],
                "name": "literal",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 225
              },
              "typeArguments": null,
              "start": 202,
              "end": 225
            },
            "start": 200,
            "end": 225
          },
          "start": 199,
          "end": 225
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 242,
                            "end": 243
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 244,
                            "end": 245
                          },
                          "optional": false,
                          "computed": false,
                          "start": 242,
                          "end": 245
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 248,
                            "end": 249
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 250,
                            "end": 251
                          },
                          "optional": false,
                          "computed": false,
                          "start": 248,
                          "end": 251
                        },
                        "start": 242,
                        "end": 251
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 254,
                          "end": 255
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 254,
                        "end": 257
                      },
                      "start": 242,
                      "end": 257
                    },
                    "operator": "+",
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 260,
                        "end": 261
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 260,
                      "end": 263
                    },
                    "start": 242,
                    "end": 263
                  },
                  "operator": "+",
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 266,
                      "end": 267
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 266,
                    "end": 269
                  },
                  "start": 242,
                  "end": 269
                },
                "operator": "+",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 273
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 272,
                  "end": 275
                },
                "start": 242,
                "end": 275
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 279
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 286
                },
                "optional": false,
                "computed": false,
                "start": 278,
                "end": 286
              },
              "start": 242,
              "end": 286
            },
            "start": 235,
            "end": 286
          }
        ],
        "start": 229,
        "end": 288
      },
      "expression": false,
      "start": 0,
      "end": 288
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "values",
        "optional": false,
        "typeAnnotation": null,
        "start": 299,
        "end": 305
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "./mod",
                  "raw": "'./mod'",
                  "start": 328,
                  "end": 335
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 342
                },
                "typeArguments": null,
                "start": 321,
                "end": 342
              },
              "typeArguments": null,
              "start": 314,
              "end": 342
            },
            "start": 312,
            "end": 342
          },
          "start": 311,
          "end": 342
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "./mod",
                  "raw": "'./mod'",
                  "start": 365,
                  "end": 372
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnotherThing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 386
                },
                "typeArguments": null,
                "start": 358,
                "end": 386
              },
              "typeArguments": null,
              "start": 351,
              "end": 386
            },
            "start": 349,
            "end": 386
          },
          "start": 348,
          "end": 386
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "./mod",
                  "raw": "'./mod'",
                  "start": 409,
                  "end": 416
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 418,
                  "end": 421
                },
                "typeArguments": null,
                "start": 402,
                "end": 421
              },
              "typeArguments": null,
              "start": 395,
              "end": 421
            },
            "start": 393,
            "end": 421
          },
          "start": 392,
          "end": 421
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "./mod",
                  "raw": "'./mod'",
                  "start": 444,
                  "end": 451
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "qux",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 456
                },
                "typeArguments": null,
                "start": 437,
                "end": 456
              },
              "typeArguments": null,
              "start": 430,
              "end": 456
            },
            "start": 428,
            "end": 456
          },
          "start": 427,
          "end": 456
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "./mod",
                  "raw": "'./mod'",
                  "start": 479,
                  "end": 486
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 488,
                  "end": 491
                },
                "typeArguments": null,
                "start": 472,
                "end": 491
              },
              "typeArguments": null,
              "start": 465,
              "end": 491
            },
            "start": 463,
            "end": 491
          },
          "start": 462,
          "end": 491
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "./mod",
                  "raw": "'./mod'",
                  "start": 514,
                  "end": 521
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "buz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 523,
                  "end": 526
                },
                "typeArguments": null,
                "start": 507,
                "end": 526
              },
              "typeArguments": null,
              "start": 500,
              "end": 526
            },
            "start": 498,
            "end": 526
          },
          "start": 497,
          "end": 526
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "./mod",
                  "raw": "'./mod'",
                  "start": 549,
                  "end": 556
                },
                "options": null,
                "qualifier": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "literal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 558,
                  "end": 565
                },
                "typeArguments": null,
                "start": 542,
                "end": 565
              },
              "typeArguments": null,
              "start": 535,
              "end": 565
            },
            "start": 533,
            "end": 565
          },
          "start": 532,
          "end": 565
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 582,
                            "end": 583
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 584,
                            "end": 590
                          },
                          "optional": false,
                          "computed": false,
                          "start": 582,
                          "end": 590
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 593,
                            "end": 594
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 595,
                            "end": 601
                          },
                          "optional": false,
                          "computed": false,
                          "start": 593,
                          "end": 601
                        },
                        "start": 582,
                        "end": 601
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 604,
                          "end": 605
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 604,
                        "end": 607
                      },
                      "start": 582,
                      "end": 607
                    },
                    "operator": "+",
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 610,
                        "end": 611
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 610,
                      "end": 613
                    },
                    "start": 582,
                    "end": 613
                  },
                  "operator": "+",
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 616,
                      "end": 617
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 616,
                    "end": 619
                  },
                  "start": 582,
                  "end": 619
                },
                "operator": "+",
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 622,
                    "end": 623
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 622,
                  "end": 625
                },
                "start": 582,
                "end": 625
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 628,
                  "end": 629
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 630,
                  "end": 636
                },
                "optional": false,
                "computed": false,
                "start": 628,
                "end": 636
              },
              "start": 582,
              "end": 636
            },
            "start": 575,
            "end": 636
          }
        ],
        "start": 569,
        "end": 638
      },
      "expression": false,
      "start": 290,
      "end": 638
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 638
}
```
