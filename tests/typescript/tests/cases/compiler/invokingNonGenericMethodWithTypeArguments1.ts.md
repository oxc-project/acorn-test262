__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 67,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 67,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 67,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 65,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 27,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 27,
              "end": 65,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 30,
                "end": 65,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 40,
                    "end": 59,
                    "expression": {
                      "type": "CallExpression",
                      "start": 40,
                      "end": 58,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 40,
                        "end": 48,
                        "object": {
                          "type": "ThisExpression",
                          "start": 40,
                          "end": 44
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 45,
                          "end": 48,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 48,
                        "end": 56,
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 49,
                            "end": 55
                          }
                        ]
                      },
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
