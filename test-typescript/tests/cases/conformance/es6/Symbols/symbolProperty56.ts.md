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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 7,
            "name": "obj",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 17,
                  "end": 32,
                  "object": {
                    "type": "Identifier",
                    "start": 17,
                    "end": 23,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 32,
                    "name": "iterator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 35,
                  "end": 36,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 41,
      "end": 337,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 70,
                  "name": "Symbol",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 311,
            "end": 335,
            "expression": {
              "type": "MemberExpression",
              "start": 311,
              "end": 334,
              "object": {
                "type": "Identifier",
                "start": 311,
                "end": 314,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "MemberExpression",
                "start": 315,
                "end": 333,
                "object": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 321,
                  "name": "Symbol",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 322,
                  "end": 332,
                  "value": "iterator",
                  "raw": "\"iterator\""
                },
                "computed": true,
                "optional": false
              },
              "computed": true,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
