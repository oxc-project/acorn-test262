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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 14,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 15,
      "end": 69,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 31,
        "end": 35,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 36,
        "end": 69,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 67,
            "static": false,
            "computed": true,
            "key": {
              "type": "SequenceExpression",
              "start": 44,
              "end": 59,
              "expressions": [
                {
                  "type": "CallExpression",
                  "start": 44,
                  "end": 51,
                  "callee": {
                    "type": "Super",
                    "start": 44,
                    "end": 49
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "Literal",
                  "start": 53,
                  "end": 59,
                  "value": "prop",
                  "raw": "\"prop\""
                }
              ]
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 67,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 67,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
