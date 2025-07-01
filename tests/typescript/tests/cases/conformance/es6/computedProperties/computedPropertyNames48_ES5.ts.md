__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "extractIndexer",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 31
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 32,
            "end": 33
          }
        ],
        "start": 31,
        "end": 34
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 44,
                          "end": 50
                        },
                        "start": 42,
                        "end": 50
                      },
                      "start": 41,
                      "end": 50
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 53,
                        "end": 54
                      },
                      "typeArguments": null,
                      "start": 53,
                      "end": 54
                    },
                    "start": 51,
                    "end": 54
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 40,
                  "end": 54
                }
              ],
              "start": 38,
              "end": 56
            },
            "start": 36,
            "end": 56
          },
          "start": 35,
          "end": 56
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 60
          },
          "typeArguments": null,
          "start": 59,
          "end": 60
        },
        "start": 57,
        "end": 60
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 61
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 69
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 73
            },
            "initializer": null,
            "computed": false,
            "start": 72,
            "end": 73
          }
        ],
        "start": 70,
        "end": 75
      },
      "const": false,
      "declare": false,
      "start": 63,
      "end": 75
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 84,
                "end": 87
              },
              "start": 82,
              "end": 87
            },
            "start": 81,
            "end": 87
          },
          "init": null,
          "definite": false,
          "start": 81,
          "end": 87
        }
      ],
      "declare": false,
      "start": 77,
      "end": 88
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "extractIndexer",
          "optional": false,
          "typeAnnotation": null,
          "start": 90,
          "end": 104
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 113
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 116,
                  "end": 118
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 111,
                "end": 118
              }
            ],
            "start": 105,
            "end": 120
          }
        ],
        "optional": false,
        "start": 90,
        "end": 121
      },
      "directive": null,
      "start": 90,
      "end": 122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "extractIndexer",
          "optional": false,
          "typeAnnotation": null,
          "start": 148,
          "end": 162
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 170,
                    "end": 171
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 172,
                    "end": 173
                  },
                  "optional": false,
                  "computed": false,
                  "start": 170,
                  "end": 173
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 176,
                  "end": 178
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 169,
                "end": 178
              }
            ],
            "start": 163,
            "end": 180
          }
        ],
        "optional": false,
        "start": 148,
        "end": 181
      },
      "directive": null,
      "start": 148,
      "end": 182
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "extractIndexer",
          "optional": false,
          "typeAnnotation": null,
          "start": 208,
          "end": 222
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 230,
                    "end": 232
                  },
                  "operator": "||",
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 236,
                    "end": 237
                  },
                  "start": 230,
                  "end": 237
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 240,
                  "end": 242
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 229,
                "end": 242
              }
            ],
            "start": 223,
            "end": 244
          }
        ],
        "optional": false,
        "start": 208,
        "end": 245
      },
      "directive": null,
      "start": 208,
      "end": 246
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 295
}
```
