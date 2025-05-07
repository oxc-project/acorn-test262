__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 131,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 16,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 14,
            "end": 16,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ForStatement",
      "start": 18,
      "end": 131,
      "body": {
        "type": "BlockStatement",
        "start": 47,
        "end": 131,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 53,
            "end": 129,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 53,
              "end": 129,
              "arguments": [
                {
                  "type": "ClassExpression",
                  "start": 64,
                  "end": 128,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 72,
                    "end": 128,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 82,
                        "end": 96,
                        "accessibility": null,
                        "computed": true,
                        "declare": false,
                        "decorators": [],
                        "definite": false,
                        "key": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 84,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": null,
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "start": 88,
                          "end": 95,
                          "async": false,
                          "body": {
                            "type": "Identifier",
                            "start": 94,
                            "end": 95,
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "PropertyDefinition",
                        "start": 105,
                        "end": 122,
                        "accessibility": null,
                        "computed": true,
                        "declare": false,
                        "decorators": [],
                        "definite": false,
                        "key": {
                          "type": "Identifier",
                          "start": 113,
                          "end": 114,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": true,
                        "typeAnnotation": null,
                        "value": {
                          "type": "Literal",
                          "start": 118,
                          "end": 121,
                          "raw": "100",
                          "value": 100,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "implements": [],
                  "superClass": null,
                  "superTypeArguments": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 53,
                "end": 63,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 58,
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 63,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 23,
        "end": 32,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 27,
            "end": 32,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 31,
              "end": 32,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 34,
        "end": 40,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 34,
          "end": 35,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 38,
          "end": 40,
          "raw": "10",
          "value": 10,
          "regex": null,
          "bigint": null
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 42,
        "end": 45,
        "argument": {
          "type": "Identifier",
          "start": 44,
          "end": 45,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
