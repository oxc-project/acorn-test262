__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 18,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 17,
      "declaration": {
        "type": "Literal",
        "start": 15,
        "end": 16,
        "value": 0,
        "raw": "0"
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 39,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 38,
      "expression": {
        "type": "ObjectExpression",
        "start": 9,
        "end": 37,
        "properties": [
          {
            "type": "Property",
            "start": 13,
            "end": 35,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 20,
              "name": "default",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 35,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 35,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "kind": "init",
            "optional": false
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 23,
      "expression": {
        "type": "FunctionExpression",
        "start": 9,
        "end": 22,
        "id": null,
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 20,
          "end": 22,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 931,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 12,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 26,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 36,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 45,
        "name": "a1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 48,
        "end": 62,
        "expression": {
          "type": "Literal",
          "start": 56,
          "end": 61,
          "value": "./a",
          "raw": "\"./a\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 76,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 101,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 84,
            "name": "a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 87,
            "end": 101,
            "callee": {
              "type": "Identifier",
              "start": 87,
              "end": 94,
              "name": "require",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 95,
                "end": 100,
                "value": "./a",
                "raw": "\"./a\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 124,
          "end": 148,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 126,
            "name": "a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 129,
            "end": 148,
            "argument": {
              "type": "ImportExpression",
              "start": 135,
              "end": 148,
              "source": {
                "type": "Literal",
                "start": 142,
                "end": 147,
                "value": "./a",
                "raw": "\"./a\""
              },
              "options": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 167,
      "expression": {
        "type": "MemberExpression",
        "start": 162,
        "end": 166,
        "object": {
          "type": "Identifier",
          "start": 162,
          "end": 164,
          "name": "a3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 165,
          "end": 166,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 169,
      "end": 190,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 176,
          "end": 178,
          "local": {
            "type": "Identifier",
            "start": 176,
            "end": 178,
            "name": "b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 184,
        "end": 189,
        "value": "./b",
        "raw": "\"./b\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 196,
      "end": 223,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 205,
        "name": "b2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 208,
        "end": 222,
        "expression": {
          "type": "Literal",
          "start": 216,
          "end": 221,
          "value": "./b",
          "raw": "\"./b\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 242,
      "end": 253,
      "expression": {
        "type": "MemberExpression",
        "start": 242,
        "end": 252,
        "object": {
          "type": "Identifier",
          "start": 242,
          "end": 244,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 245,
          "end": 252,
          "name": "default",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 254,
      "end": 285,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 260,
          "end": 284,
          "id": {
            "type": "Identifier",
            "start": 260,
            "end": 262,
            "name": "b3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 265,
            "end": 284,
            "argument": {
              "type": "ImportExpression",
              "start": 271,
              "end": 284,
              "source": {
                "type": "Literal",
                "start": 278,
                "end": 283,
                "value": "./b",
                "raw": "\"./b\""
              },
              "options": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 304,
      "end": 315,
      "expression": {
        "type": "MemberExpression",
        "start": 304,
        "end": 314,
        "object": {
          "type": "Identifier",
          "start": 304,
          "end": 306,
          "name": "b3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 307,
          "end": 314,
          "name": "default",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 317,
      "end": 338,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 324,
          "end": 326,
          "local": {
            "type": "Identifier",
            "start": 324,
            "end": 326,
            "name": "c1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 332,
        "end": 337,
        "value": "./c",
        "raw": "\"./c\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 375,
      "end": 402,
      "id": {
        "type": "Identifier",
        "start": 382,
        "end": 384,
        "name": "c2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 387,
        "end": 401,
        "expression": {
          "type": "Literal",
          "start": 395,
          "end": 400,
          "value": "./c",
          "raw": "\"./c\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 439,
      "end": 450,
      "expression": {
        "type": "MemberExpression",
        "start": 439,
        "end": 449,
        "object": {
          "type": "Identifier",
          "start": 439,
          "end": 441,
          "name": "c2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 442,
          "end": 449,
          "name": "default",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 451,
      "end": 472,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 458,
          "end": 460,
          "local": {
            "type": "Identifier",
            "start": 458,
            "end": 460,
            "name": "d1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 466,
        "end": 471,
        "value": "./d",
        "raw": "\"./d\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 496,
      "end": 523,
      "id": {
        "type": "Identifier",
        "start": 503,
        "end": 505,
        "name": "d2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 508,
        "end": 522,
        "expression": {
          "type": "Literal",
          "start": 516,
          "end": 521,
          "value": "./d",
          "raw": "\"./d\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 547,
      "end": 552,
      "expression": {
        "type": "CallExpression",
        "start": 547,
        "end": 551,
        "callee": {
          "type": "Identifier",
          "start": 547,
          "end": 549,
          "name": "d2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 553,
      "end": 566,
      "expression": {
        "type": "CallExpression",
        "start": 553,
        "end": 565,
        "callee": {
          "type": "MemberExpression",
          "start": 553,
          "end": 563,
          "object": {
            "type": "Identifier",
            "start": 553,
            "end": 555,
            "name": "d2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 556,
            "end": 563,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 576,
      "end": 607,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 582,
          "end": 606,
          "id": {
            "type": "Identifier",
            "start": 582,
            "end": 584,
            "name": "d3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "AwaitExpression",
            "start": 587,
            "end": 606,
            "argument": {
              "type": "ImportExpression",
              "start": 593,
              "end": 606,
              "source": {
                "type": "Literal",
                "start": 600,
                "end": 605,
                "value": "./d",
                "raw": "\"./d\""
              },
              "options": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 644,
      "end": 657,
      "expression": {
        "type": "CallExpression",
        "start": 644,
        "end": 656,
        "callee": {
          "type": "MemberExpression",
          "start": 644,
          "end": 654,
          "object": {
            "type": "Identifier",
            "start": 644,
            "end": 646,
            "name": "d3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 647,
            "end": 654,
            "name": "default",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 659,
      "end": 684,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 666,
          "end": 668,
          "local": {
            "type": "Identifier",
            "start": 666,
            "end": 668,
            "name": "e1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 674,
        "end": 683,
        "value": "./e.mjs",
        "raw": "\"./e.mjs\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 690,
      "end": 721,
      "id": {
        "type": "Identifier",
        "start": 697,
        "end": 699,
        "name": "e2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 702,
        "end": 720,
        "expression": {
          "type": "Literal",
          "start": 710,
          "end": 719,
          "value": "./e.mjs",
          "raw": "\"./e.mjs\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 727,
      "end": 752,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 734,
          "end": 736,
          "local": {
            "type": "Identifier",
            "start": 734,
            "end": 736,
            "name": "f1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 742,
        "end": 751,
        "value": "./f.cjs",
        "raw": "\"./f.cjs\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 758,
      "end": 789,
      "id": {
        "type": "Identifier",
        "start": 765,
        "end": 767,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 770,
        "end": 788,
        "expression": {
          "type": "Literal",
          "start": 778,
          "end": 787,
          "value": "./f.cjs",
          "raw": "\"./f.cjs\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 808,
      "end": 819,
      "expression": {
        "type": "MemberExpression",
        "start": 808,
        "end": 818,
        "object": {
          "type": "Identifier",
          "start": 808,
          "end": 810,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 811,
          "end": 818,
          "name": "default",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ImportDeclaration",
      "start": 821,
      "end": 842,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 828,
          "end": 830,
          "local": {
            "type": "Identifier",
            "start": 828,
            "end": 830,
            "name": "g1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 836,
        "end": 841,
        "value": "./g",
        "raw": "\"./g\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 861,
      "end": 872,
      "expression": {
        "type": "MemberExpression",
        "start": 861,
        "end": 871,
        "object": {
          "type": "Identifier",
          "start": 861,
          "end": 863,
          "name": "g1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 864,
          "end": 871,
          "name": "default",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 873,
      "end": 900,
      "id": {
        "type": "Identifier",
        "start": 880,
        "end": 882,
        "name": "g2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 885,
        "end": 899,
        "expression": {
          "type": "Literal",
          "start": 893,
          "end": 898,
          "value": "./g",
          "raw": "\"./g\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 919,
      "end": 930,
      "expression": {
        "type": "MemberExpression",
        "start": 919,
        "end": 929,
        "object": {
          "type": "Identifier",
          "start": 919,
          "end": 921,
          "name": "g2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 922,
          "end": 929,
          "name": "default",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
