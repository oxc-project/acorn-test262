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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "name": "arr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 12,
            "end": 14,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ForStatement",
      "start": 16,
      "end": 103,
      "init": {
        "type": "VariableDeclaration",
        "start": 21,
        "end": 30,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 25,
            "end": 30,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 29,
              "end": 30,
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
        "start": 32,
        "end": 38,
        "left": {
          "type": "Identifier",
          "start": 32,
          "end": 33,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 36,
          "end": 38,
          "value": 10,
          "raw": "10"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 40,
        "end": 43,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 42,
          "end": 43,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 103,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 51,
            "end": 84,
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 59,
              "end": 84,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 69,
                  "end": 78,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 69,
                    "end": 73,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 77,
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
          },
          {
            "type": "ExpressionStatement",
            "start": 89,
            "end": 101,
            "expression": {
              "type": "CallExpression",
              "start": 89,
              "end": 100,
              "callee": {
                "type": "MemberExpression",
                "start": 89,
                "end": 97,
                "object": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 92,
                  "name": "arr",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 97,
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
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
