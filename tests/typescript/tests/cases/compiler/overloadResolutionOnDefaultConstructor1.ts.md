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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 67,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 65,
            "accessibility": "public",
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 28,
              "end": 65,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 56,
                          "end": 57,
                          "raw": "0",
                          "value": 0
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 52,
                        "end": 55,
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Bar",
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
