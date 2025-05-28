__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 349,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 38,
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
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "start": 17,
                  "end": 32,
                  "object": {
                    "type": "Identifier",
                    "start": 17,
                    "end": 23,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 32,
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "value": {
                  "type": "Literal",
                  "start": 35,
                  "end": 36,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 41,
      "end": 349,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 50,
        "end": 349,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 56,
            "end": 86,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 60,
                "end": 85,
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 85,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 66,
                    "end": 85,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 68,
                      "end": 85,
                      "typeName": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 85,
                        "decorators": [],
                        "name": "SymbolConstructor",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
            "start": 326,
            "end": 347,
            "expression": {
              "type": "MemberExpression",
              "start": 326,
              "end": 346,
              "object": {
                "type": "Identifier",
                "start": 326,
                "end": 329,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "MemberExpression",
                "start": 330,
                "end": 345,
                "object": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 336,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 345,
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "optional": false,
              "computed": true
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
