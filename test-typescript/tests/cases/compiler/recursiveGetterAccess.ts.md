__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 58,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 14,
        "end": 58,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 56,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 28,
              "decorators": [],
              "name": "testProp",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 56,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 31,
                "end": 56,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 33,
                    "end": 54,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 40,
                      "end": 53,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 40,
                        "end": 44
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 45,
                        "end": 53,
                        "decorators": [],
                        "name": "testProp",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
        "start": 6,
        "end": 13,
        "decorators": [],
        "name": "MyClass",
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
