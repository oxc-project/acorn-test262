__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 163,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 52,
      "body": {
        "type": "TSInterfaceBody",
        "start": 36,
        "end": 52,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 38,
            "end": 50,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 42,
              "decorators": [],
              "name": "blub",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 50,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 44,
                "end": 50
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "EmptyStatement",
      "start": 52,
      "end": 53
    },
    {
      "type": "FunctionDeclaration",
      "start": 54,
      "end": 79,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 77,
        "end": 79,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 65,
        "decorators": [],
        "name": "fn",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 66,
          "end": 75,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 70,
            "end": 75,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 72,
              "end": 75,
              "typeName": {
                "type": "Identifier",
                "start": 72,
                "end": 75,
                "decorators": [],
                "name": "Foo",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 81,
      "end": 122,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 90,
        "decorators": [],
        "name": "Test",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 93,
        "end": 121,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 110,
          "end": 121,
          "params": [
            {
              "type": "TSTypeQuery",
              "start": 111,
              "end": 120,
              "exprName": {
                "type": "Identifier",
                "start": 118,
                "end": 120,
                "decorators": [],
                "name": "fn",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 93,
          "end": 110,
          "decorators": [],
          "name": "ThisParameterType",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 161,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 133,
            "decorators": [],
            "name": "fb",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 136,
            "end": 161,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 144,
                "end": 160,
                "properties": [
                  {
                    "type": "Property",
                    "start": 146,
                    "end": 158,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 150,
                      "decorators": [],
                      "name": "blub",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 152,
                      "end": 158,
                      "raw": "\"blub\"",
                      "value": "blub"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 136,
              "end": 143,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 136,
                "end": 138,
                "decorators": [],
                "name": "fn",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 139,
                "end": 143,
                "decorators": [],
                "name": "bind",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
