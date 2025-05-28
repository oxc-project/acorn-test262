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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 14,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 15,
      "end": 69,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 36,
        "end": 69,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 67,
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
                  "callee": {
                    "type": "Super",
                    "start": 44,
                    "end": 49
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
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
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 67,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 64,
                "end": 67,
                "body": []
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
