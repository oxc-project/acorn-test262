__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 813,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 28,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 26,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 30,
      "end": 68,
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 46,
        "end": 47,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 48,
        "end": 68,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 66,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 57,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 65,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 59,
                "end": 65
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 70,
      "end": 128,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 86,
        "name": "Object",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 87,
        "end": 128,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 93,
            "end": 101,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 97,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 100,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 99,
                "end": 100,
                "typeName": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 106,
            "end": 126,
            "parameters": [
              {
                "type": "Identifier",
                "start": 107,
                "end": 116,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 108,
                  "end": 116,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 110,
                    "end": 116
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 125,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 119,
                "end": 125,
                "typeName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 125,
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 130,
      "end": 194,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 137,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 138,
        "end": 194,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 144,
            "end": 157,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 144,
              "end": 151,
              "name": "valueOf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 151,
              "end": 157,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 154,
                "end": 157,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 162,
            "end": 170,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 162,
              "end": 166,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 166,
              "end": 169,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 168,
                "end": 169,
                "typeName": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "TSIndexSignature",
            "start": 175,
            "end": 192,
            "parameters": [
              {
                "type": "Identifier",
                "start": 176,
                "end": 185,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 177,
                  "end": 185,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 179,
                    "end": 185
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 191,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 188,
                "end": 191
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 196,
      "end": 205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 200,
          "end": 204,
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 204,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 204,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 203,
                "end": 204,
                "typeName": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 204,
                  "name": "C",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 206,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 232,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 218,
            "name": "r1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 212,
              "end": 218,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 214,
                "end": 218
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 221,
            "end": 232,
            "callee": {
              "type": "MemberExpression",
              "start": 221,
              "end": 230,
              "object": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 223,
                "end": 230,
                "name": "valueOf",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 234,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 253,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 244,
            "name": "r1b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 241,
              "end": 244,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 243,
                "end": 244,
                "typeName": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 244,
                  "name": "B",
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
            "start": 247,
            "end": 253,
            "object": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 249,
              "end": 253,
              "name": "data",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 255,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 259,
          "end": 274,
          "id": {
            "type": "Identifier",
            "start": 259,
            "end": 262,
            "name": "r1c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 265,
            "end": 274,
            "object": {
              "type": "Identifier",
              "start": 265,
              "end": 268,
              "name": "r1b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 269,
              "end": 273,
              "value": "hm",
              "raw": "'hm'"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 298,
      "end": 316,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 315,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 305,
            "name": "r1d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 308,
            "end": 315,
            "object": {
              "type": "Identifier",
              "start": 308,
              "end": 309,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 310,
              "end": 314,
              "value": "hm",
              "raw": "'hm'"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 337,
      "end": 408,
      "id": {
        "type": "Identifier",
        "start": 347,
        "end": 348,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 349,
        "end": 408,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 355,
            "end": 371,
            "key": {
              "type": "Identifier",
              "start": 355,
              "end": 362,
              "name": "valueOf",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 364,
              "end": 370,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 366,
                "end": 370
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 376,
            "end": 384,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 376,
              "end": 380,
              "name": "data",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 380,
              "end": 383,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 382,
                "end": 383,
                "typeName": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 383,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSIndexSignature",
            "start": 389,
            "end": 406,
            "parameters": [
              {
                "type": "Identifier",
                "start": 390,
                "end": 399,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 391,
                  "end": 399,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 393,
                    "end": 399
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 400,
              "end": 405,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 402,
                "end": 405
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 410,
      "end": 419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 414,
          "end": 418,
          "id": {
            "type": "Identifier",
            "start": 414,
            "end": 418,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 415,
              "end": 418,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 417,
                "end": 418,
                "typeName": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 418,
                  "name": "I",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 420,
      "end": 447,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 424,
          "end": 446,
          "id": {
            "type": "Identifier",
            "start": 424,
            "end": 432,
            "name": "r2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 426,
              "end": 432,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 428,
                "end": 432
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 435,
            "end": 446,
            "callee": {
              "type": "MemberExpression",
              "start": 435,
              "end": 444,
              "object": {
                "type": "Identifier",
                "start": 435,
                "end": 436,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 437,
                "end": 444,
                "name": "valueOf",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 448,
      "end": 468,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 452,
          "end": 467,
          "id": {
            "type": "Identifier",
            "start": 452,
            "end": 458,
            "name": "r2b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 455,
              "end": 458,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 457,
                "end": 458,
                "typeName": {
                  "type": "Identifier",
                  "start": 457,
                  "end": 458,
                  "name": "B",
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
            "start": 461,
            "end": 467,
            "object": {
              "type": "Identifier",
              "start": 461,
              "end": 462,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 463,
              "end": 467,
              "name": "data",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 469,
      "end": 489,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 473,
          "end": 488,
          "id": {
            "type": "Identifier",
            "start": 473,
            "end": 476,
            "name": "r2c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 479,
            "end": 488,
            "object": {
              "type": "Identifier",
              "start": 479,
              "end": 482,
              "name": "r2b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 483,
              "end": 487,
              "value": "hm",
              "raw": "'hm'"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 512,
      "end": 530,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 516,
          "end": 529,
          "id": {
            "type": "Identifier",
            "start": 516,
            "end": 519,
            "name": "r2d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 522,
            "end": 529,
            "object": {
              "type": "Identifier",
              "start": 522,
              "end": 523,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 524,
              "end": 528,
              "value": "hm",
              "raw": "'hm'"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 551,
      "end": 604,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 555,
          "end": 604,
          "id": {
            "type": "Identifier",
            "start": 555,
            "end": 556,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 559,
            "end": 604,
            "properties": [
              {
                "type": "Property",
                "start": 565,
                "end": 583,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 565,
                  "end": 572,
                  "name": "valueOf",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 574,
                  "end": 583,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 580,
                    "end": 583,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 589,
                "end": 602,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 589,
                  "end": 593,
                  "name": "data",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 595,
                  "end": 602,
                  "callee": {
                    "type": "Identifier",
                    "start": 599,
                    "end": 600,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 606,
      "end": 633,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 610,
          "end": 632,
          "id": {
            "type": "Identifier",
            "start": 610,
            "end": 618,
            "name": "r3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 612,
              "end": 618,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 614,
                "end": 618
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 621,
            "end": 632,
            "callee": {
              "type": "MemberExpression",
              "start": 621,
              "end": 630,
              "object": {
                "type": "Identifier",
                "start": 621,
                "end": 622,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 623,
                "end": 630,
                "name": "valueOf",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 634,
      "end": 654,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 638,
          "end": 653,
          "id": {
            "type": "Identifier",
            "start": 638,
            "end": 644,
            "name": "r3b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 641,
              "end": 644,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 643,
                "end": 644,
                "typeName": {
                  "type": "Identifier",
                  "start": 643,
                  "end": 644,
                  "name": "B",
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
            "start": 647,
            "end": 653,
            "object": {
              "type": "Identifier",
              "start": 647,
              "end": 648,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 649,
              "end": 653,
              "name": "data",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 655,
      "end": 675,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 659,
          "end": 674,
          "id": {
            "type": "Identifier",
            "start": 659,
            "end": 662,
            "name": "r3c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 665,
            "end": 674,
            "object": {
              "type": "Identifier",
              "start": 665,
              "end": 668,
              "name": "r3b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 669,
              "end": 673,
              "value": "hm",
              "raw": "'hm'"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 698,
      "end": 716,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 702,
          "end": 715,
          "id": {
            "type": "Identifier",
            "start": 702,
            "end": 705,
            "name": "r3d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 708,
            "end": 715,
            "object": {
              "type": "Identifier",
              "start": 708,
              "end": 709,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 710,
              "end": 714,
              "value": "hm",
              "raw": "'hm'"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 718,
      "end": 784,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 722,
          "end": 784,
          "id": {
            "type": "Identifier",
            "start": 722,
            "end": 784,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 723,
              "end": 784,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 725,
                "end": 784,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 731,
                    "end": 747,
                    "key": {
                      "type": "Identifier",
                      "start": 731,
                      "end": 738,
                      "name": "valueOf",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 740,
                      "end": 746,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 742,
                        "end": 746
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 752,
                    "end": 760,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 752,
                      "end": 756,
                      "name": "data",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 756,
                      "end": 759,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 758,
                        "end": 759,
                        "typeName": {
                          "type": "Identifier",
                          "start": 758,
                          "end": 759,
                          "name": "B",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 765,
                    "end": 782,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 766,
                        "end": 775,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 767,
                          "end": 775,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 769,
                            "end": 775
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 776,
                      "end": 781,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 778,
                        "end": 781
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 786,
      "end": 813,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 790,
          "end": 812,
          "id": {
            "type": "Identifier",
            "start": 790,
            "end": 798,
            "name": "r4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 792,
              "end": 798,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 794,
                "end": 798
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 801,
            "end": 812,
            "callee": {
              "type": "MemberExpression",
              "start": 801,
              "end": 810,
              "object": {
                "type": "Identifier",
                "start": 801,
                "end": 802,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 803,
                "end": 810,
                "name": "valueOf",
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
