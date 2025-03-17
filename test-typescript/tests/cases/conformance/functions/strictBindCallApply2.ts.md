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
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "blub",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "fn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 66,
          "end": 75,
          "name": "this",
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
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 77,
        "end": 79,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 81,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 90,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
          "name": "ThisParameterType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "fn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 161,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 133,
            "name": "fb",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "fn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 139,
                "end": 143,
                "name": "bind",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 150,
                      "name": "blub",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 152,
                      "end": 158,
                      "value": "blub",
                      "raw": "\"blub\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
