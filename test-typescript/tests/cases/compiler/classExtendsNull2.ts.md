__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 164,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 57,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 71,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 83,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Literal",
        "start": 92,
        "end": 96,
        "value": null,
        "raw": "null"
      },
      "body": {
        "type": "ClassBody",
        "start": 97,
        "end": 135,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 101,
            "end": 133,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 112,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 133,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
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
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 136,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 147,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 156,
          "end": 160,
          "expression": {
            "type": "Identifier",
            "start": 156,
            "end": 160,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
