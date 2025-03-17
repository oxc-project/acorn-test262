__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 14,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 12,
            "end": 14,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ForStatement",
      "start": 16,
      "end": 103,
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 103,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 51,
            "end": 84,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 59,
              "end": 84,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 69,
                  "end": 78,
                  "accessibility": null,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 73,
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
                    "start": 76,
                    "end": 77,
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
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          },
          {
            "type": "ExpressionStatement",
            "start": 89,
            "end": 101,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 89,
              "end": 100,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 89,
                "end": 97,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 92,
                  "decorators": [],
                  "name": "arr",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 97,
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
        "start": 21,
        "end": 30,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 25,
            "end": 30,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 29,
              "end": 30,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 32,
        "end": 38,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 32,
          "end": 33,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 36,
          "end": 38,
          "raw": "10",
          "value": 10
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 40,
        "end": 43,
        "argument": {
          "type": "Identifier",
          "start": 42,
          "end": 43,
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
