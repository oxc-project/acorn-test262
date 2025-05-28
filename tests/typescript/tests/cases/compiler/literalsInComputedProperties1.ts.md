__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 708,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 54,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 54,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 54,
            "properties": [
              {
                "type": "Property",
                "start": 14,
                "end": 17,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 14,
                  "end": 15,
                  "value": 1,
                  "raw": "1"
                },
                "value": {
                  "type": "Literal",
                  "start": 16,
                  "end": 17,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 23,
                "end": 28,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 24,
                  "end": 25,
                  "value": 2,
                  "raw": "2"
                },
                "value": {
                  "type": "Literal",
                  "start": 27,
                  "end": 28,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              },
              {
                "type": "Property",
                "start": 34,
                "end": 39,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 34,
                  "end": 37,
                  "value": "3",
                  "raw": "\"3\""
                },
                "value": {
                  "type": "Literal",
                  "start": 38,
                  "end": 39,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 45,
                "end": 52,
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "start": 46,
                  "end": 49,
                  "value": "4",
                  "raw": "\"4\""
                },
                "value": {
                  "type": "Literal",
                  "start": 51,
                  "end": 52,
                  "value": 1,
                  "raw": "1"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 55,
      "end": 76,
      "expression": {
        "type": "CallExpression",
        "start": 55,
        "end": 75,
        "callee": {
          "type": "MemberExpression",
          "start": 55,
          "end": 73,
          "object": {
            "type": "MemberExpression",
            "start": 55,
            "end": 59,
            "object": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 57,
              "end": 58,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 60,
            "end": 73,
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 98,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 97,
        "callee": {
          "type": "MemberExpression",
          "start": 77,
          "end": 95,
          "object": {
            "type": "MemberExpression",
            "start": 77,
            "end": 81,
            "object": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 79,
              "end": 80,
              "value": 2,
              "raw": "2"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 82,
            "end": 95,
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 120,
      "expression": {
        "type": "CallExpression",
        "start": 99,
        "end": 119,
        "callee": {
          "type": "MemberExpression",
          "start": 99,
          "end": 117,
          "object": {
            "type": "MemberExpression",
            "start": 99,
            "end": 103,
            "object": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 101,
              "end": 102,
              "value": 3,
              "raw": "3"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 104,
            "end": 117,
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 142,
      "expression": {
        "type": "CallExpression",
        "start": 121,
        "end": 141,
        "callee": {
          "type": "MemberExpression",
          "start": 121,
          "end": 139,
          "object": {
            "type": "MemberExpression",
            "start": 121,
            "end": 125,
            "object": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 123,
              "end": 124,
              "value": 4,
              "raw": "4"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 126,
            "end": 139,
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 144,
      "end": 223,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 155,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 156,
        "end": 223,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 162,
            "end": 171,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 162,
              "end": 163,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 163,
              "end": 170,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 164,
                "end": 170
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 176,
            "end": 187,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 177,
              "end": 178,
              "value": 2,
              "raw": "2"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 186,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 180,
                "end": 186
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 192,
            "end": 203,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 192,
              "end": 195,
              "value": "3",
              "raw": "\"3\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 202,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 196,
                "end": 202
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 208,
            "end": 221,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 209,
              "end": 212,
              "value": "4",
              "raw": "\"4\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 213,
              "end": 220,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 214,
                "end": 220
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 225,
      "end": 233,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 232,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 232,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 230,
              "end": 232,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 231,
                "end": 232,
                "typeName": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 232,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 234,
      "end": 255,
      "expression": {
        "type": "CallExpression",
        "start": 234,
        "end": 254,
        "callee": {
          "type": "MemberExpression",
          "start": 234,
          "end": 252,
          "object": {
            "type": "MemberExpression",
            "start": 234,
            "end": 238,
            "object": {
              "type": "Identifier",
              "start": 234,
              "end": 235,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 236,
              "end": 237,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 239,
            "end": 252,
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 256,
      "end": 277,
      "expression": {
        "type": "CallExpression",
        "start": 256,
        "end": 276,
        "callee": {
          "type": "MemberExpression",
          "start": 256,
          "end": 274,
          "object": {
            "type": "MemberExpression",
            "start": 256,
            "end": 260,
            "object": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 258,
              "end": 259,
              "value": 2,
              "raw": "2"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 261,
            "end": 274,
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 278,
      "end": 299,
      "expression": {
        "type": "CallExpression",
        "start": 278,
        "end": 298,
        "callee": {
          "type": "MemberExpression",
          "start": 278,
          "end": 296,
          "object": {
            "type": "MemberExpression",
            "start": 278,
            "end": 282,
            "object": {
              "type": "Identifier",
              "start": 278,
              "end": 279,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 280,
              "end": 281,
              "value": 3,
              "raw": "3"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 283,
            "end": 296,
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 300,
      "end": 321,
      "expression": {
        "type": "CallExpression",
        "start": 300,
        "end": 320,
        "callee": {
          "type": "MemberExpression",
          "start": 300,
          "end": 318,
          "object": {
            "type": "MemberExpression",
            "start": 300,
            "end": 304,
            "object": {
              "type": "Identifier",
              "start": 300,
              "end": 301,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 302,
              "end": 303,
              "value": 4,
              "raw": "4"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 305,
            "end": 318,
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 323,
      "end": 398,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 329,
        "end": 330,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 331,
        "end": 398,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 337,
            "end": 346,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 337,
              "end": 338,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 338,
              "end": 345,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 339,
                "end": 345
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 351,
            "end": 362,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 352,
              "end": 353,
              "value": 2,
              "raw": "2"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 354,
              "end": 361,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 355,
                "end": 361
              }
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 367,
            "end": 378,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 367,
              "end": 370,
              "value": "3",
              "raw": "\"3\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 370,
              "end": 377,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 371,
                "end": 377
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 383,
            "end": 396,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 384,
              "end": 387,
              "value": "4",
              "raw": "\"4\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 388,
              "end": 395,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 389,
                "end": 395
              }
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 400,
      "end": 408,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 404,
          "end": 407,
          "id": {
            "type": "Identifier",
            "start": 404,
            "end": 407,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 405,
              "end": 407,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 406,
                "end": 407,
                "typeName": {
                  "type": "Identifier",
                  "start": 406,
                  "end": 407,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 409,
      "end": 430,
      "expression": {
        "type": "CallExpression",
        "start": 409,
        "end": 429,
        "callee": {
          "type": "MemberExpression",
          "start": 409,
          "end": 427,
          "object": {
            "type": "MemberExpression",
            "start": 409,
            "end": 413,
            "object": {
              "type": "Identifier",
              "start": 409,
              "end": 410,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 411,
              "end": 412,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 414,
            "end": 427,
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 431,
      "end": 452,
      "expression": {
        "type": "CallExpression",
        "start": 431,
        "end": 451,
        "callee": {
          "type": "MemberExpression",
          "start": 431,
          "end": 449,
          "object": {
            "type": "MemberExpression",
            "start": 431,
            "end": 435,
            "object": {
              "type": "Identifier",
              "start": 431,
              "end": 432,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 433,
              "end": 434,
              "value": 2,
              "raw": "2"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 436,
            "end": 449,
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 453,
      "end": 474,
      "expression": {
        "type": "CallExpression",
        "start": 453,
        "end": 473,
        "callee": {
          "type": "MemberExpression",
          "start": 453,
          "end": 471,
          "object": {
            "type": "MemberExpression",
            "start": 453,
            "end": 457,
            "object": {
              "type": "Identifier",
              "start": 453,
              "end": 454,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 455,
              "end": 456,
              "value": 3,
              "raw": "3"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 458,
            "end": 471,
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 475,
      "end": 496,
      "expression": {
        "type": "CallExpression",
        "start": 475,
        "end": 495,
        "callee": {
          "type": "MemberExpression",
          "start": 475,
          "end": 493,
          "object": {
            "type": "MemberExpression",
            "start": 475,
            "end": 479,
            "object": {
              "type": "Identifier",
              "start": 475,
              "end": 476,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 477,
              "end": 478,
              "value": 4,
              "raw": "4"
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Identifier",
            "start": 480,
            "end": 493,
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 498,
      "end": 591,
      "id": {
        "type": "Identifier",
        "start": 503,
        "end": 504,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 505,
        "end": 591,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 511,
            "end": 516,
            "id": {
              "type": "Literal",
              "start": 511,
              "end": 512,
              "value": 1,
              "raw": "1"
            },
            "initializer": {
              "type": "Literal",
              "start": 515,
              "end": 516,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 522,
            "end": 529,
            "id": {
              "type": "Literal",
              "start": 523,
              "end": 524,
              "value": 2,
              "raw": "2"
            },
            "initializer": {
              "type": "Literal",
              "start": 528,
              "end": 529,
              "value": 2,
              "raw": "2"
            },
            "computed": true
          },
          {
            "type": "TSEnumMember",
            "start": 535,
            "end": 542,
            "id": {
              "type": "Literal",
              "start": 535,
              "end": 538,
              "value": "3",
              "raw": "\"3\""
            },
            "initializer": {
              "type": "Literal",
              "start": 541,
              "end": 542,
              "value": 3,
              "raw": "3"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 548,
            "end": 557,
            "id": {
              "type": "Literal",
              "start": 549,
              "end": 552,
              "value": "4",
              "raw": "\"4\""
            },
            "initializer": {
              "type": "Literal",
              "start": 556,
              "end": 557,
              "value": 4,
              "raw": "4"
            },
            "computed": true
          },
          {
            "type": "TSEnumMember",
            "start": 563,
            "end": 572,
            "id": {
              "type": "Literal",
              "start": 563,
              "end": 568,
              "value": "foo",
              "raw": "\"foo\""
            },
            "initializer": {
              "type": "Literal",
              "start": 571,
              "end": 572,
              "value": 5,
              "raw": "5"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 578,
            "end": 589,
            "id": {
              "type": "Literal",
              "start": 579,
              "end": 584,
              "value": "bar",
              "raw": "\"bar\""
            },
            "initializer": {
              "type": "Literal",
              "start": 588,
              "end": 589,
              "value": 6,
              "raw": "6"
            },
            "computed": true
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 593,
      "end": 610,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 597,
          "end": 609,
          "id": {
            "type": "Identifier",
            "start": 597,
            "end": 598,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 601,
            "end": 609,
            "object": {
              "type": "Identifier",
              "start": 601,
              "end": 602,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 603,
              "end": 608,
              "value": "foo",
              "raw": "\"foo\""
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 611,
      "end": 629,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 615,
          "end": 628,
          "id": {
            "type": "Identifier",
            "start": 615,
            "end": 617,
            "decorators": [],
            "name": "a0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 620,
            "end": 628,
            "object": {
              "type": "Identifier",
              "start": 620,
              "end": 621,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 622,
              "end": 627,
              "value": "bar",
              "raw": "\"bar\""
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
