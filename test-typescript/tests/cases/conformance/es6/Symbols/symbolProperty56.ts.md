__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 337,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 10,
            "end": 38,
            "properties": [
              {
                "type": "Property",
                "start": 16,
                "end": 36,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 17,
                  "end": 32,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 17,
                    "end": 23,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 32,
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 35,
                  "end": 36,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 41,
      "end": 337,
      "body": {
        "type": "TSModuleBlock",
        "start": 50,
        "end": 337,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 56,
            "end": 71,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 60,
                "end": 70,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 70,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 66,
                    "end": 70,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 68,
                      "end": 70,
                      "members": []
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 311,
            "end": 335,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 311,
              "end": 334,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 311,
                "end": 314,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "MemberExpression",
                "start": 315,
                "end": 333,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 321,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 322,
                  "end": 332,
                  "raw": "\"iterator\"",
                  "value": "iterator"
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
