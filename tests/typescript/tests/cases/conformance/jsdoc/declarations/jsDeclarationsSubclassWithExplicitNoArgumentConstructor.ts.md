__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 240,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 144,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 144,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 18,
          "decorators": [],
          "name": "Super",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 144,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 106,
              "end": 142,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 106,
                "end": 117,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 117,
                "end": 142,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 118,
                    "end": 126,
                    "decorators": [],
                    "name": "firstArg",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 128,
                    "end": 137,
                    "decorators": [],
                    "name": "secondArg",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 139,
                  "end": 142,
                  "body": []
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 146,
      "end": 240,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 153,
        "end": 240,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 159,
          "end": 162,
          "decorators": [],
          "name": "Sub",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "start": 171,
          "end": 176,
          "decorators": [],
          "name": "Super",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 177,
          "end": 240,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 183,
              "end": 238,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 183,
                "end": 194,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 194,
                "end": 238,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 197,
                  "end": 238,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 207,
                      "end": 232,
                      "expression": {
                        "type": "CallExpression",
                        "start": 207,
                        "end": 231,
                        "callee": {
                          "type": "Super",
                          "start": 207,
                          "end": 212
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 213,
                            "end": 220,
                            "value": "first",
                            "raw": "'first'"
                          },
                          {
                            "type": "Literal",
                            "start": 222,
                            "end": 230,
                            "value": "second",
                            "raw": "'second'"
                          }
                        ],
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
