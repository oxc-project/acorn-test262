__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 106,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 38,
      "body": {
        "type": "TSInterfaceBody",
        "start": 36,
        "end": 38,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 22,
          "end": 35,
          "expression": {
            "type": "Identifier",
            "start": 22,
            "end": 27,
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 27,
            "end": 35,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 28,
                "end": 34
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 40,
      "end": 105,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 50,
        "end": 105,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 56,
            "end": 103,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 67,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 67,
              "end": 103,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 70,
                "end": 103,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 80,
                    "end": 88,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 80,
                      "end": 87,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 80,
                        "end": 85
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 49,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
