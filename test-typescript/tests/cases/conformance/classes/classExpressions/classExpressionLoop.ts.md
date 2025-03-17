__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 96,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "arr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 10,
            "end": 12,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ForStatement",
      "start": 14,
      "end": 95,
      "init": {
        "type": "VariableDeclaration",
        "start": 19,
        "end": 28,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 23,
            "end": 28,
            "id": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 27,
              "end": 28,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 30,
        "end": 36,
        "left": {
          "type": "Identifier",
          "start": 30,
          "end": 31,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 34,
          "end": 36,
          "value": 10,
          "raw": "10"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 38,
        "end": 41,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 40,
          "end": 41,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 43,
        "end": 95,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 49,
            "end": 93,
            "expression": {
              "type": "CallExpression",
              "start": 49,
              "end": 92,
              "callee": {
                "type": "MemberExpression",
                "start": 49,
                "end": 57,
                "object": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 52,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 57,
                  "name": "push",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ClassExpression",
                  "start": 58,
                  "end": 91,
                  "id": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "superClass": null,
                  "body": {
                    "type": "ClassBody",
                    "start": 66,
                    "end": 91,
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "start": 76,
                        "end": 85,
                        "static": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 76,
                          "end": 80,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 84,
                          "name": "i",
                          "typeAnnotation": null,
                          "decorators": [],
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
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
