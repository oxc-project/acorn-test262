__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 69,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 14,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 14,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 15,
      "end": 69,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 36,
        "end": 69,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 67,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "SequenceExpression",
              "start": 44,
              "end": 59,
              "expressions": [
                {
                  "type": "CallExpression",
                  "start": 44,
                  "end": 51,
                  "arguments": [],
                  "callee": {
                    "type": "Super",
                    "start": 44,
                    "end": 49
                  },
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "Literal",
                  "start": 53,
                  "end": 59,
                  "raw": "\"prop\"",
                  "value": "prop"
                }
              ]
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 67,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 67,
                "body": []
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
        "start": 21,
        "end": 22,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 31,
        "end": 35,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
