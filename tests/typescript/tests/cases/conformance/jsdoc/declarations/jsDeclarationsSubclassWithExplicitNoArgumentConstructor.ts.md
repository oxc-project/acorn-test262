__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Super",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 18
        },
        "typeParameters": null,
        "superClass": null,
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
                "start": 106,
                "end": 117
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "firstArg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 126
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "secondArg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 128,
                    "end": 137
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 139,
                  "end": 142
                },
                "expression": false,
                "start": 117,
                "end": 142
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 106,
              "end": 142
            }
          ],
          "start": 19,
          "end": 144
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 144
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 144
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Sub",
          "optional": false,
          "typeAnnotation": null,
          "start": 159,
          "end": 162
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Super",
          "optional": false,
          "typeAnnotation": null,
          "start": 171,
          "end": 176
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
                "start": 183,
                "end": 194
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
                          "start": 207,
                          "end": 212
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "first",
                            "raw": "'first'",
                            "start": 213,
                            "end": 220
                          },
                          {
                            "type": "Literal",
                            "value": "second",
                            "raw": "'second'",
                            "start": 222,
                            "end": 230
                          }
                        ],
                        "optional": false,
                        "start": 207,
                        "end": 231
                      },
                      "directive": null,
                      "start": 207,
                      "end": 232
                    }
                  ],
                  "start": 197,
                  "end": 238
                },
                "expression": false,
                "start": 194,
                "end": 238
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 183,
              "end": 238
            }
          ],
          "start": 177,
          "end": 240
        },
        "abstract": false,
        "declare": false,
        "start": 153,
        "end": 240
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 146,
      "end": 240
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 240
}
```
