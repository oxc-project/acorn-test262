__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 825,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 22,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 29,
        "name": "E1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 32,
          "end": 35,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 35,
            "name": "ONE",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 37,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 40,
            "name": "TWO",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 42,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 47,
            "name": "THREE",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 30,
        "end": 49,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 32,
            "end": 35,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
              "name": "ONE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 37,
            "end": 40,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 40,
              "name": "TWO",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 42,
            "end": 47,
            "id": {
              "type": "Identifier",
              "start": 42,
              "end": 47,
              "name": "THREE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 50,
      "end": 85,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 65,
        "name": "E2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 68,
          "end": 71,
          "id": {
            "type": "Identifier",
            "start": 68,
            "end": 71,
            "name": "ONE",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 73,
          "end": 76,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 76,
            "name": "TWO",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 78,
          "end": 83,
          "id": {
            "type": "Identifier",
            "start": 78,
            "end": 83,
            "name": "THREE",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": true,
      "body": {
        "type": "TSEnumBody",
        "start": 66,
        "end": 85,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 68,
            "end": 71,
            "id": {
              "type": "Identifier",
              "start": 68,
              "end": 71,
              "name": "ONE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 73,
            "end": 76,
            "id": {
              "type": "Identifier",
              "start": 73,
              "end": 76,
              "name": "TWO",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 78,
            "end": 83,
            "id": {
              "type": "Identifier",
              "start": 78,
              "end": 83,
              "name": "THREE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 87,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 97,
        "name": "Bins1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 100,
        "end": 123,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 103,
          "end": 110,
          "name": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 108,
            "end": 110,
            "typeName": {
              "type": "Identifier",
              "start": 108,
              "end": 110,
              "name": "E1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 114,
          "end": 120
        },
        "optional": true,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 108,
          "end": 110,
          "typeName": {
            "type": "Identifier",
            "start": 108,
            "end": 110,
            "name": "E1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 103,
          "end": 104,
          "name": "k",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 124,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 129,
        "end": 134,
        "name": "Bins2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 137,
        "end": 160,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 140,
          "end": 147,
          "name": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeReference",
            "start": 145,
            "end": 147,
            "typeName": {
              "type": "Identifier",
              "start": 145,
              "end": 147,
              "name": "E2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 151,
          "end": 157
        },
        "optional": true,
        "readonly": null,
        "constraint": {
          "type": "TSTypeReference",
          "start": 145,
          "end": 147,
          "typeName": {
            "type": "Identifier",
            "start": 145,
            "end": 147,
            "name": "E2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "key": {
          "type": "Identifier",
          "start": 140,
          "end": 141,
          "name": "k",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 162,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 182,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 177,
            "name": "b1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 170,
              "end": 177,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 172,
                "end": 177,
                "typeName": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 177,
                  "name": "Bins1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 180,
            "end": 182,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 184,
      "end": 205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 204,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 199,
            "name": "b2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 192,
              "end": 199,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 194,
                "end": 199,
                "typeName": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 199,
                  "name": "Bins2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 202,
            "end": 204,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 207,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 213,
          "end": 228,
          "id": {
            "type": "Identifier",
            "start": 213,
            "end": 219,
            "name": "e1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 219,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 217,
                "end": 219,
                "typeName": {
                  "type": "Identifier",
                  "start": 217,
                  "end": 219,
                  "name": "E1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 222,
            "end": 228,
            "object": {
              "type": "Identifier",
              "start": 222,
              "end": 224,
              "name": "E1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 225,
              "end": 228,
              "name": "ONE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 230,
      "end": 252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 251,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 242,
            "name": "e2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 238,
              "end": 242,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 240,
                "end": 242,
                "typeName": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 242,
                  "name": "E2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 245,
            "end": 251,
            "object": {
              "type": "Identifier",
              "start": 245,
              "end": 247,
              "name": "E2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 248,
              "end": 251,
              "name": "ONE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 254,
      "end": 266,
      "expression": {
        "type": "AssignmentExpression",
        "start": 254,
        "end": 265,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 254,
          "end": 259,
          "object": {
            "type": "Identifier",
            "start": 254,
            "end": 256,
            "name": "b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 257,
            "end": 258,
            "value": 1,
            "raw": "1"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 262,
          "end": 265,
          "value": "a",
          "raw": "\"a\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 267,
      "end": 280,
      "expression": {
        "type": "AssignmentExpression",
        "start": 267,
        "end": 279,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 267,
          "end": 273,
          "object": {
            "type": "Identifier",
            "start": 267,
            "end": 269,
            "name": "b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 270,
            "end": 272,
            "name": "e1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 276,
          "end": 279,
          "value": "b",
          "raw": "\"b\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 282,
      "end": 294,
      "expression": {
        "type": "AssignmentExpression",
        "start": 282,
        "end": 293,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 282,
          "end": 287,
          "object": {
            "type": "Identifier",
            "start": 282,
            "end": 284,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 285,
            "end": 286,
            "value": 1,
            "raw": "1"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 290,
          "end": 293,
          "value": "a",
          "raw": "\"a\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 295,
      "end": 308,
      "expression": {
        "type": "AssignmentExpression",
        "start": 295,
        "end": 307,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 295,
          "end": 301,
          "object": {
            "type": "Identifier",
            "start": 295,
            "end": 297,
            "name": "b2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 298,
            "end": 300,
            "name": "e2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 304,
          "end": 307,
          "value": "b",
          "raw": "\"b\""
        }
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 402,
      "end": 433,
      "id": {
        "type": "Identifier",
        "start": 419,
        "end": 422,
        "name": "val",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 424,
        "end": 432,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 426,
          "end": 432
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 435,
      "end": 467,
      "id": {
        "type": "Identifier",
        "start": 440,
        "end": 442,
        "name": "N1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 445,
          "end": 454,
          "id": {
            "type": "Identifier",
            "start": 445,
            "end": 446,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "CallExpression",
            "start": 449,
            "end": 454,
            "callee": {
              "type": "Identifier",
              "start": 449,
              "end": 452,
              "name": "val",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 456,
          "end": 465,
          "id": {
            "type": "Identifier",
            "start": 456,
            "end": 457,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "CallExpression",
            "start": 460,
            "end": 465,
            "callee": {
              "type": "Identifier",
              "start": 460,
              "end": 463,
              "name": "val",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 443,
        "end": 467,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 445,
            "end": 454,
            "id": {
              "type": "Identifier",
              "start": 445,
              "end": 446,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "CallExpression",
              "start": 449,
              "end": 454,
              "callee": {
                "type": "Identifier",
                "start": 449,
                "end": 452,
                "name": "val",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 456,
            "end": 465,
            "id": {
              "type": "Identifier",
              "start": 456,
              "end": 457,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "CallExpression",
              "start": 460,
              "end": 465,
              "callee": {
                "type": "Identifier",
                "start": 460,
                "end": 463,
                "name": "val",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 468,
      "end": 500,
      "id": {
        "type": "Identifier",
        "start": 473,
        "end": 475,
        "name": "N2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 478,
          "end": 487,
          "id": {
            "type": "Identifier",
            "start": 478,
            "end": 479,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "CallExpression",
            "start": 482,
            "end": 487,
            "callee": {
              "type": "Identifier",
              "start": 482,
              "end": 485,
              "name": "val",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 489,
          "end": 498,
          "id": {
            "type": "Identifier",
            "start": 489,
            "end": 490,
            "name": "D",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "CallExpression",
            "start": 493,
            "end": 498,
            "callee": {
              "type": "Identifier",
              "start": 493,
              "end": 496,
              "name": "val",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 476,
        "end": 500,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 478,
            "end": 487,
            "id": {
              "type": "Identifier",
              "start": 478,
              "end": 479,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "CallExpression",
              "start": 482,
              "end": 487,
              "callee": {
                "type": "Identifier",
                "start": 482,
                "end": 485,
                "name": "val",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 489,
            "end": 498,
            "id": {
              "type": "Identifier",
              "start": 489,
              "end": 490,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "CallExpression",
              "start": 493,
              "end": 498,
              "callee": {
                "type": "Identifier",
                "start": 493,
                "end": 496,
                "name": "val",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 502,
      "end": 534,
      "id": {
        "type": "Identifier",
        "start": 507,
        "end": 509,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 512,
        "end": 533,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 515,
          "end": 527,
          "name": {
            "type": "Identifier",
            "start": 515,
            "end": 516,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSUnionType",
            "start": 520,
            "end": 527,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 520,
                "end": 522,
                "typeName": {
                  "type": "Identifier",
                  "start": 520,
                  "end": 522,
                  "name": "N1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 525,
                "end": 527,
                "typeName": {
                  "type": "Identifier",
                  "start": 525,
                  "end": 527,
                  "name": "N2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 530,
          "end": 531,
          "typeName": {
            "type": "Identifier",
            "start": 530,
            "end": 531,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSUnionType",
          "start": 520,
          "end": 527,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 520,
              "end": 522,
              "typeName": {
                "type": "Identifier",
                "start": 520,
                "end": 522,
                "name": "N1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 525,
              "end": 527,
              "typeName": {
                "type": "Identifier",
                "start": 525,
                "end": 527,
                "name": "N2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        },
        "key": {
          "type": "Identifier",
          "start": 515,
          "end": 516,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 744,
      "end": 784,
      "id": {
        "type": "Identifier",
        "start": 757,
        "end": 758,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 761,
          "end": 764,
          "id": {
            "type": "Identifier",
            "start": 761,
            "end": 764,
            "name": "ONE",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 766,
          "end": 769,
          "id": {
            "type": "Identifier",
            "start": 766,
            "end": 769,
            "name": "TWO",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 771,
          "end": 782,
          "id": {
            "type": "Identifier",
            "start": 771,
            "end": 776,
            "name": "THREE",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 779,
            "end": 782,
            "value": "x",
            "raw": "'x'"
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": true,
      "body": {
        "type": "TSEnumBody",
        "start": 759,
        "end": 784,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 761,
            "end": 764,
            "id": {
              "type": "Identifier",
              "start": 761,
              "end": 764,
              "name": "ONE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 766,
            "end": 769,
            "id": {
              "type": "Identifier",
              "start": 766,
              "end": 769,
              "name": "TWO",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 771,
            "end": 782,
            "id": {
              "type": "Identifier",
              "start": 771,
              "end": 776,
              "name": "THREE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 779,
              "end": 782,
              "value": "x",
              "raw": "'x'"
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 785,
      "end": 804,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 791,
          "end": 803,
          "id": {
            "type": "Identifier",
            "start": 791,
            "end": 795,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 792,
              "end": 795,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 794,
                "end": 795,
                "typeName": {
                  "type": "Identifier",
                  "start": 794,
                  "end": 795,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 798,
            "end": 803,
            "object": {
              "type": "Identifier",
              "start": 798,
              "end": 799,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 800,
              "end": 803,
              "name": "ONE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 805,
      "end": 824,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 811,
          "end": 823,
          "id": {
            "type": "Identifier",
            "start": 811,
            "end": 819,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 812,
              "end": 819,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 814,
                "end": 819,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 814,
                  "end": 819,
                  "left": {
                    "type": "Identifier",
                    "start": 814,
                    "end": 815,
                    "name": "E",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 816,
                    "end": 819,
                    "name": "ONE",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 822,
            "end": 823,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
