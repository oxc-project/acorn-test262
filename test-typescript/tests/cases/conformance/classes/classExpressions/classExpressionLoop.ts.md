__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 10,
            "end": 12,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ForStatement",
      "start": 14,
      "end": 95,
      "body": {
        "type": "BlockStatement",
        "start": 43,
        "end": 95,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 49,
            "end": 93,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 49,
              "end": 92,
              "arguments": [
                {
                  "type": "ClassExpression",
                  "start": 58,
                  "end": 91,
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "start": 66,
                    "end": 91,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 76,
                        "end": 85,
                        "accessibility": null,
                        "computed": false,
                        "declare": false,
                        "decorators": [],
                        "definite": false,
                        "key": {
                          "type": "Identifier",
                          "start": 76,
                          "end": 80,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": null,
                        "value": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 84,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
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
                "start": 49,
                "end": 57,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 52,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 57,
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
        "start": 19,
        "end": 28,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 23,
            "end": 28,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 27,
              "end": 28,
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
        "start": 30,
        "end": 36,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 30,
          "end": 31,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 34,
          "end": 36,
          "raw": "10",
          "value": 10,
          "regex": null,
          "bigint": null
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 38,
        "end": 41,
        "argument": {
          "type": "Identifier",
          "start": 40,
          "end": 41,
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
