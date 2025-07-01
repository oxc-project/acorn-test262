__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "$",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 63,
                      "end": 66
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 70,
                        "end": 74
                      },
                      "start": 68,
                      "end": 74
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 63,
                    "end": 74
                  }
                ],
                "start": 61,
                "end": 76
              },
              "start": 59,
              "end": 76
            },
            "start": 58,
            "end": 76
          },
          "init": null,
          "definite": false,
          "start": 58,
          "end": 76
        }
      ],
      "declare": true,
      "start": 46,
      "end": 77
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 46,
  "end": 79
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "$",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 34
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 38
          },
          "optional": false,
          "computed": false,
          "start": 33,
          "end": 38
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 33,
        "end": 40
      },
      "directive": null,
      "start": 33,
      "end": 41
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 33,
  "end": 41
}
```
