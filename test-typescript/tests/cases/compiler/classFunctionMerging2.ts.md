__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 218,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 71,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 24,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 71,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 54,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 42,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 42,
              "end": 54,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 43,
                  "end": 52,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 44,
                    "end": 52,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 46,
                      "end": 52
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "start": 59,
            "end": 69,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
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
              "start": 60,
              "end": 68,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 62,
                "end": 68
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 73,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 91,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 92,
          "end": 101,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 93,
            "end": 101,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 95,
              "end": 101
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 102,
        "end": 105,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 104,
          "end": 105,
          "typeName": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 107,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 131,
        "end": 132,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 133,
        "end": 179,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 162,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 150,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 150,
              "end": 162,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 151,
                  "end": 160,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 152,
                    "end": 160,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 154,
                      "end": 160
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
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
            "start": 167,
            "end": 177,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "name": "b",
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
              "start": 168,
              "end": 176,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 170,
                "end": 176
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
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 181,
      "end": 201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 201,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 186,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 189,
            "end": 201,
            "callee": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 195,
                "end": 200,
                "value": "Hey",
                "raw": "\"Hey\""
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 202,
      "end": 218,
      "expression": {
        "type": "CallExpression",
        "start": 202,
        "end": 218,
        "callee": {
          "type": "MemberExpression",
          "start": 202,
          "end": 213,
          "object": {
            "type": "Identifier",
            "start": 202,
            "end": 209,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 210,
            "end": 213,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 214,
            "end": 217,
            "object": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
