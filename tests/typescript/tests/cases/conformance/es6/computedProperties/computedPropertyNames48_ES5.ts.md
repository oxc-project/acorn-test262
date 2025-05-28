__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 295,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 61,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 31,
        "decorators": [],
        "name": "extractIndexer",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 31,
        "end": 34,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 32,
            "end": 33,
            "name": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 35,
          "end": 56,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 36,
            "end": 56,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 38,
              "end": 56,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 40,
                  "end": 54,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 41,
                      "end": 50,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 42,
                        "end": 50,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 44,
                          "end": 50
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 51,
                    "end": 54,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 53,
                      "end": 54,
                      "typeName": {
                        "type": "Identifier",
                        "start": 53,
                        "end": 54,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 57,
        "end": 60,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 59,
          "end": 60,
          "typeName": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 63,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 69,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 70,
        "end": 75,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 72,
            "end": 73,
            "id": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 88,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 87,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 87,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 87,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 84,
                "end": 87
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
      "start": 90,
      "end": 122,
      "expression": {
        "type": "CallExpression",
        "start": 90,
        "end": 121,
        "callee": {
          "type": "Identifier",
          "start": 90,
          "end": 104,
          "decorators": [],
          "name": "extractIndexer",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 105,
            "end": 120,
            "properties": [
              {
                "type": "Property",
                "start": 111,
                "end": 118,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 113,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 116,
                  "end": 118,
                  "value": "",
                  "raw": "\"\""
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 182,
      "expression": {
        "type": "CallExpression",
        "start": 148,
        "end": 181,
        "callee": {
          "type": "Identifier",
          "start": 148,
          "end": 162,
          "decorators": [],
          "name": "extractIndexer",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 163,
            "end": 180,
            "properties": [
              {
                "type": "Property",
                "start": 169,
                "end": 178,
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 170,
                  "end": 173,
                  "object": {
                    "type": "Identifier",
                    "start": 170,
                    "end": 171,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 173,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 176,
                  "end": 178,
                  "value": "",
                  "raw": "\"\""
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 208,
      "end": 246,
      "expression": {
        "type": "CallExpression",
        "start": 208,
        "end": 245,
        "callee": {
          "type": "Identifier",
          "start": 208,
          "end": 222,
          "decorators": [],
          "name": "extractIndexer",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 223,
            "end": 244,
            "properties": [
              {
                "type": "Property",
                "start": 229,
                "end": 242,
                "kind": "init",
                "key": {
                  "type": "LogicalExpression",
                  "start": 230,
                  "end": 237,
                  "left": {
                    "type": "Literal",
                    "start": 230,
                    "end": 232,
                    "value": "",
                    "raw": "\"\""
                  },
                  "operator": "||",
                  "right": {
                    "type": "Literal",
                    "start": 236,
                    "end": 237,
                    "value": 0,
                    "raw": "0"
                  }
                },
                "value": {
                  "type": "Literal",
                  "start": 240,
                  "end": 242,
                  "value": "",
                  "raw": "\"\""
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
