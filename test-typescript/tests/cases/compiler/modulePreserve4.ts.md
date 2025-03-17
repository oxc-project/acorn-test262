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
        "raw": "0",
        "value": 0
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 13,
              "end": 20,
              "decorators": [],
              "name": "default",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 35,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 35,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
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
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 20,
          "end": 22,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": null,
        "params": [],
        "returnType": null,
        "typeParameters": null
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 26,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 12,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 36,
      "end": 63,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 45,
        "decorators": [],
        "name": "a1",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 48,
        "end": 62,
        "expression": {
          "type": "Literal",
          "start": 56,
          "end": 61,
          "raw": "\"./a\"",
          "value": "./a"
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 84,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 87,
            "end": 101,
            "arguments": [
              {
                "type": "Literal",
                "start": 95,
                "end": 100,
                "raw": "\"./a\"",
                "value": "./a"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 87,
              "end": 94,
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 124,
            "end": 126,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AwaitExpression",
            "start": 129,
            "end": 148,
            "argument": {
              "type": "ImportExpression",
              "start": 135,
              "end": 148,
              "options": null,
              "source": {
                "type": "Literal",
                "start": 142,
                "end": 147,
                "raw": "\"./a\"",
                "value": "./a"
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 167,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 162,
        "end": 166,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 162,
          "end": 164,
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 165,
          "end": 166,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 169,
      "end": 190,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 184,
        "end": 189,
        "raw": "\"./b\"",
        "value": "./b"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 176,
          "end": 178,
          "local": {
            "type": "Identifier",
            "start": 176,
            "end": 178,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 196,
      "end": 223,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 205,
        "decorators": [],
        "name": "b2",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 208,
        "end": 222,
        "expression": {
          "type": "Literal",
          "start": 216,
          "end": 221,
          "raw": "\"./b\"",
          "value": "./b"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 242,
      "end": 253,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 242,
        "end": 252,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 242,
          "end": 244,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 245,
          "end": 252,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 260,
            "end": 262,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AwaitExpression",
            "start": 265,
            "end": 284,
            "argument": {
              "type": "ImportExpression",
              "start": 271,
              "end": 284,
              "options": null,
              "source": {
                "type": "Literal",
                "start": 278,
                "end": 283,
                "raw": "\"./b\"",
                "value": "./b"
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 304,
      "end": 315,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 304,
        "end": 314,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 304,
          "end": 306,
          "decorators": [],
          "name": "b3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 307,
          "end": 314,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 317,
      "end": 338,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 332,
        "end": 337,
        "raw": "\"./c\"",
        "value": "./c"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 324,
          "end": 326,
          "local": {
            "type": "Identifier",
            "start": 324,
            "end": 326,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 375,
      "end": 402,
      "id": {
        "type": "Identifier",
        "start": 382,
        "end": 384,
        "decorators": [],
        "name": "c2",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 387,
        "end": 401,
        "expression": {
          "type": "Literal",
          "start": 395,
          "end": 400,
          "raw": "\"./c\"",
          "value": "./c"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 439,
      "end": 450,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 439,
        "end": 449,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 439,
          "end": 441,
          "decorators": [],
          "name": "c2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 442,
          "end": 449,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 451,
      "end": 472,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 466,
        "end": 471,
        "raw": "\"./d\"",
        "value": "./d"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 458,
          "end": 460,
          "local": {
            "type": "Identifier",
            "start": 458,
            "end": 460,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 496,
      "end": 523,
      "id": {
        "type": "Identifier",
        "start": 503,
        "end": 505,
        "decorators": [],
        "name": "d2",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 508,
        "end": 522,
        "expression": {
          "type": "Literal",
          "start": 516,
          "end": 521,
          "raw": "\"./d\"",
          "value": "./d"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 547,
      "end": 552,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 547,
        "end": 551,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 547,
          "end": 549,
          "decorators": [],
          "name": "d2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 553,
      "end": 566,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 553,
        "end": 565,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 553,
          "end": 563,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 553,
            "end": 555,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 556,
            "end": 563,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 582,
            "end": 584,
            "decorators": [],
            "name": "d3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AwaitExpression",
            "start": 587,
            "end": 606,
            "argument": {
              "type": "ImportExpression",
              "start": 593,
              "end": 606,
              "options": null,
              "source": {
                "type": "Literal",
                "start": 600,
                "end": 605,
                "raw": "\"./d\"",
                "value": "./d"
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 644,
      "end": 657,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 644,
        "end": 656,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 644,
          "end": 654,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 644,
            "end": 646,
            "decorators": [],
            "name": "d3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 647,
            "end": 654,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 659,
      "end": 684,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 674,
        "end": 683,
        "raw": "\"./e.mjs\"",
        "value": "./e.mjs"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 666,
          "end": 668,
          "local": {
            "type": "Identifier",
            "start": 666,
            "end": 668,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 690,
      "end": 721,
      "id": {
        "type": "Identifier",
        "start": 697,
        "end": 699,
        "decorators": [],
        "name": "e2",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 702,
        "end": 720,
        "expression": {
          "type": "Literal",
          "start": 710,
          "end": 719,
          "raw": "\"./e.mjs\"",
          "value": "./e.mjs"
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 727,
      "end": 752,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 742,
        "end": 751,
        "raw": "\"./f.cjs\"",
        "value": "./f.cjs"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 734,
          "end": 736,
          "local": {
            "type": "Identifier",
            "start": 734,
            "end": 736,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 758,
      "end": 789,
      "id": {
        "type": "Identifier",
        "start": 765,
        "end": 767,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 770,
        "end": 788,
        "expression": {
          "type": "Literal",
          "start": 778,
          "end": 787,
          "raw": "\"./f.cjs\"",
          "value": "./f.cjs"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 808,
      "end": 819,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 808,
        "end": 818,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 808,
          "end": 810,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 811,
          "end": 818,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 821,
      "end": 842,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 836,
        "end": 841,
        "raw": "\"./g\"",
        "value": "./g"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 828,
          "end": 830,
          "local": {
            "type": "Identifier",
            "start": 828,
            "end": 830,
            "decorators": [],
            "name": "g1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 861,
      "end": 872,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 861,
        "end": 871,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 861,
          "end": 863,
          "decorators": [],
          "name": "g1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 864,
          "end": 871,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 873,
      "end": 900,
      "id": {
        "type": "Identifier",
        "start": 880,
        "end": 882,
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 885,
        "end": 899,
        "expression": {
          "type": "Literal",
          "start": 893,
          "end": 898,
          "raw": "\"./g\"",
          "value": "./g"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 919,
      "end": 930,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 919,
        "end": 929,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 919,
          "end": 921,
          "decorators": [],
          "name": "g2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 922,
          "end": 929,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        }
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
  "end": 33,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
