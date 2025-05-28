__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 163,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 71,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 72,
        "end": 74,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 76,
      "end": 135,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 83,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Literal",
        "start": 92,
        "end": 96,
        "value": null,
        "raw": "null"
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 97,
        "end": 135,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 101,
            "end": 133,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 112,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 133,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 115,
                "end": 133,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 121,
                    "end": 129,
                    "expression": {
                      "type": "CallExpression",
                      "start": 121,
                      "end": 128,
                      "callee": {
                        "type": "Super",
                        "start": 121,
                        "end": 126
                      },
                      "typeArguments": null,
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
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 136,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 147,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 156,
          "end": 160,
          "expression": {
            "type": "Identifier",
            "start": 156,
            "end": 160,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 161,
        "end": 163,
        "body": []
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
