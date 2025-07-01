__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 71
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 72,
        "end": 74
      },
      "declare": false,
      "start": 57,
      "end": 74
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 83
      },
      "typeParameters": null,
      "superClass": {
        "type": "Literal",
        "value": null,
        "raw": "null",
        "start": 92,
        "end": 96
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 112
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 121,
                        "end": 126
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 121,
                      "end": 128
                    },
                    "directive": null,
                    "start": 121,
                    "end": 129
                  }
                ],
                "start": 115,
                "end": 133
              },
              "expression": false,
              "start": 112,
              "end": 133
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 101,
            "end": 133
          }
        ],
        "start": 97,
        "end": 135
      },
      "abstract": false,
      "declare": false,
      "start": 76,
      "end": 135
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 147
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 160
          },
          "typeArguments": null,
          "start": 156,
          "end": 160
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 161,
        "end": 163
      },
      "declare": false,
      "start": 136,
      "end": 163
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 163
}
```
