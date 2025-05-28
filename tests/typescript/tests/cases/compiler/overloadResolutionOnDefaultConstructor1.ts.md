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
        "name": "Bar",
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
              "start": 23,
              "end": 28,
              "decorators": [],
              "name": "clone",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 28,
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
                "start": 31,
                "end": 65,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 41,
                    "end": 59,
                    "argument": {
                      "type": "NewExpression",
                      "start": 48,
                      "end": 58,
                      "callee": {
                        "type": "Identifier",
                        "start": 52,
                        "end": 55,
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 56,
                          "end": 57,
                          "value": 0,
                          "raw": "0"
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
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
