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
        "name": "Combo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 26,
                "end": 32
              },
              "start": 24,
              "end": 32
            },
            "start": 22,
            "end": 33
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 39
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 48,
                            "end": 54
                          },
                          "start": 46,
                          "end": 54
                        },
                        "start": 45,
                        "end": 54
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 57,
                        "end": 63
                      },
                      "start": 55,
                      "end": 63
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 44,
                    "end": 63
                  }
                ],
                "start": 42,
                "end": 65
              },
              "start": 40,
              "end": 65
            },
            "accessibility": null,
            "static": false,
            "start": 38,
            "end": 66
          }
        ],
        "start": 16,
        "end": 68
      },
      "declare": false,
      "start": 0,
      "end": 68
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Combo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 83
                },
                "typeArguments": null,
                "start": 78,
                "end": 83
              },
              "start": 76,
              "end": 83
            },
            "start": 75,
            "end": 83
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 92,
              "end": 93
            },
            "id": null,
            "generator": false,
            "start": 86,
            "end": 93
          },
          "definite": false,
          "start": 75,
          "end": 93
        }
      ],
      "declare": false,
      "start": 69,
      "end": 93
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 165
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 167
          },
          "optional": false,
          "computed": false,
          "start": 164,
          "end": 167
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 170,
          "end": 172
        },
        "start": 164,
        "end": 172
      },
      "directive": null,
      "start": 164,
      "end": 172
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 173
}
```
