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
      "end": 61,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 61,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 12,
            "end": 59,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 14,
              "end": 29,
              "object": {
                "type": "Identifier",
                "start": 14,
                "end": 20,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 21,
                "end": 29,
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 59,
              "id": null,
              "generator": true,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 59,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 39,
                    "end": 55,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 43,
                        "end": 54,
                        "id": {
                          "type": "Identifier",
                          "start": 43,
                          "end": 44,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "YieldExpression",
                          "start": 47,
                          "end": 54,
                          "delegate": false,
                          "argument": {
                            "type": "Literal",
                            "start": 53,
                            "end": 54,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": true,
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
