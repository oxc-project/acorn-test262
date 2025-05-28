__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 162,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 42,
              "decorators": [],
              "name": "blub",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 50,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 44,
                "end": 50
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 65,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 77,
        "end": 79,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 81,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 90,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 93,
        "end": 121,
        "typeName": {
          "type": "Identifier",
          "start": 93,
          "end": 110,
          "decorators": [],
          "name": "ThisParameterType",
          "optional": false,
          "typeAnnotation": null
        },
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 162,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 161,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 133,
            "decorators": [],
            "name": "fb",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 136,
            "end": 161,
            "callee": {
              "type": "MemberExpression",
              "start": 136,
              "end": 143,
              "object": {
                "type": "Identifier",
                "start": 136,
                "end": 138,
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 139,
                "end": 143,
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 150,
                      "decorators": [],
                      "name": "blub",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 152,
                      "end": 158,
                      "value": "blub",
                      "raw": "\"blub\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
