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
        "name": "LazyArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 15
      },
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
              "start": 16,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 17
          }
        ],
        "start": 15,
        "end": 18
      },
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
              "name": "objects",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 40
            },
            "typeAnnotation": null,
            "value": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "objectId",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 57,
                            "end": 63
                          },
                          "start": 55,
                          "end": 63
                        },
                        "start": 47,
                        "end": 63
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
                          "start": 66,
                          "end": 67
                        },
                        "typeArguments": null,
                        "start": 66,
                        "end": 67
                      },
                      "start": 64,
                      "end": 67
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 46,
                    "end": 68
                  }
                ],
                "start": 44,
                "end": 70
              },
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 71,
                "end": 73
              },
              "start": 43,
              "end": 73
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 25,
            "end": 74
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "array",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 84
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 104,
                        "end": 108
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "objects",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 109,
                        "end": 116
                      },
                      "optional": false,
                      "computed": false,
                      "start": 104,
                      "end": 116
                    },
                    "start": 97,
                    "end": 117
                  }
                ],
                "start": 87,
                "end": 123
              },
              "expression": false,
              "start": 84,
              "end": 123
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 79,
            "end": 123
          }
        ],
        "start": 19,
        "end": 125
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 125
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
            "name": "lazyArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 139
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "LazyArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 155
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 156,
                  "end": 162
                }
              ],
              "start": 155,
              "end": 163
            },
            "arguments": [],
            "start": 142,
            "end": 165
          },
          "definite": false,
          "start": 130,
          "end": 165
        }
      ],
      "declare": false,
      "start": 126,
      "end": 166
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
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 178,
                "end": 184
              },
              "start": 176,
              "end": 184
            },
            "start": 171,
            "end": 184
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lazyArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 196
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 202
                },
                "optional": false,
                "computed": false,
                "start": 187,
                "end": 202
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 187,
              "end": 204
            },
            "property": {
              "type": "Literal",
              "value": "test",
              "raw": "\"test\"",
              "start": 205,
              "end": 211
            },
            "optional": false,
            "computed": true,
            "start": 187,
            "end": 212
          },
          "definite": false,
          "start": 171,
          "end": 212
        }
      ],
      "declare": false,
      "start": 167,
      "end": 213
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 236
}
```
