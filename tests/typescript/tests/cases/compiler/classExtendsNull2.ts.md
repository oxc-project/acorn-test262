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
      "body": {
        "type": "TSInterfaceBody",
        "start": 72,
        "end": 74,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 71,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 76,
      "end": 135,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 97,
        "end": 135,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 101,
            "end": 133,
            "accessibility": null,
            "computed": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 133,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 115,
                "end": 133,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 121,
                    "end": 129,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 121,
                      "end": 128,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 121,
                        "end": 126
                      },
                      "optional": false,
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
        "start": 82,
        "end": 83,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Literal",
        "start": 92,
        "end": 96,
        "raw": "null",
        "value": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 136,
      "end": 163,
      "body": {
        "type": "TSInterfaceBody",
        "start": 161,
        "end": 163,
        "body": []
      },
      "declare": false,
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
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 147,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
