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
      "end": 349,
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
        "end": 349,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 56,
            "end": 86,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 60,
                "end": 85,
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 85,
                  "name": "Symbol",
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
                        "name": "SymbolConstructor",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "MemberExpression",
                "start": 330,
                "end": 345,
                "object": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 336,
                  "name": "Symbol",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 345,
                  "name": "iterator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
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
