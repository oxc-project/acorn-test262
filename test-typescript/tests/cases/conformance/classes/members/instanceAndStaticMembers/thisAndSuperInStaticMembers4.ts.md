__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 432,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 15,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 94,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 36,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "name": "a",
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
              "start": 30,
              "end": 35,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 32,
                "end": 35
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 41,
            "end": 60,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 49,
              "end": 60,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 51,
                "end": 59,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 53,
                  "end": 59
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 65,
            "end": 75,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "name": "a",
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
              "start": 66,
              "end": 74,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 68,
                "end": 74
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 92,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 81,
              "end": 92,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 83,
                "end": 91,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 85,
                  "end": 91
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 96,
      "end": 432,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 114,
        "end": 432,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 120,
            "end": 147,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "TSNonNullExpression",
              "start": 136,
              "end": 146,
              "expression": {
                "type": "Identifier",
                "start": 136,
                "end": 145,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 133,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 130,
                "end": 133
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 152,
            "end": 171,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 161,
              "name": "y1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 164,
              "end": 170,
              "object": {
                "type": "ThisExpression",
                "start": 164,
                "end": 168
              },
              "property": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 176,
            "end": 197,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 183,
              "end": 185,
              "name": "y2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 188,
              "end": 196,
              "callee": {
                "type": "MemberExpression",
                "start": 188,
                "end": 194,
                "object": {
                  "type": "ThisExpression",
                  "start": 188,
                  "end": 192
                },
                "property": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
                  "name": "x",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 202,
            "end": 224,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 211,
              "name": "y3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ChainExpression",
              "start": 214,
              "end": 223,
              "expression": {
                "type": "CallExpression",
                "start": 214,
                "end": 223,
                "callee": {
                  "type": "MemberExpression",
                  "start": 214,
                  "end": 221,
                  "object": {
                    "type": "ThisExpression",
                    "start": 214,
                    "end": 218
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 221,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 229,
            "end": 255,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 238,
              "name": "y4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 241,
              "end": 254,
              "callee": {
                "type": "MemberExpression",
                "start": 241,
                "end": 252,
                "object": {
                  "type": "ThisExpression",
                  "start": 241,
                  "end": 245
                },
                "property": {
                  "type": "Literal",
                  "start": 247,
                  "end": 250,
                  "value": "x",
                  "raw": "\"x\""
                },
                "computed": true,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 260,
            "end": 288,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 267,
              "end": 269,
              "name": "y5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ChainExpression",
              "start": 272,
              "end": 287,
              "expression": {
                "type": "CallExpression",
                "start": 272,
                "end": 287,
                "callee": {
                  "type": "MemberExpression",
                  "start": 272,
                  "end": 285,
                  "object": {
                    "type": "ThisExpression",
                    "start": 272,
                    "end": 276
                  },
                  "property": {
                    "type": "Literal",
                    "start": 280,
                    "end": 283,
                    "value": "x",
                    "raw": "\"x\""
                  },
                  "computed": true,
                  "optional": true
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 293,
            "end": 315,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 300,
              "end": 302,
              "name": "z3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 305,
              "end": 314,
              "callee": {
                "type": "MemberExpression",
                "start": 305,
                "end": 312,
                "object": {
                  "type": "Super",
                  "start": 305,
                  "end": 310
                },
                "property": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 312,
                  "name": "f",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 320,
            "end": 345,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 329,
              "name": "z4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 332,
              "end": 344,
              "callee": {
                "type": "MemberExpression",
                "start": 332,
                "end": 342,
                "object": {
                  "type": "Super",
                  "start": 332,
                  "end": 337
                },
                "property": {
                  "type": "Literal",
                  "start": 338,
                  "end": 341,
                  "value": "f",
                  "raw": "\"f\""
                },
                "computed": true,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 389,
            "end": 395,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 389,
              "end": 390,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 393,
              "end": 394,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 400,
            "end": 411,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 400,
              "end": 401,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 404,
              "end": 410,
              "object": {
                "type": "ThisExpression",
                "start": 404,
                "end": 408
              },
              "property": {
                "type": "Identifier",
                "start": 409,
                "end": 410,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 416,
            "end": 430,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 416,
              "end": 417,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 420,
              "end": 429,
              "callee": {
                "type": "MemberExpression",
                "start": 420,
                "end": 427,
                "object": {
                  "type": "Super",
                  "start": 420,
                  "end": 425
                },
                "property": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 427,
                  "name": "f",
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
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
