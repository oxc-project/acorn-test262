__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 23
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 42
              },
              "optional": false,
              "computed": false,
              "start": 17,
              "end": 42
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 63,
                      "end": 64
                    },
                    "start": 56,
                    "end": 65
                  }
                ],
                "start": 46,
                "end": 71
              },
              "expression": false,
              "start": 43,
              "end": 71
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 16,
            "end": 71
          }
        ],
        "start": 10,
        "end": 73
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 73
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 84
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 110
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 129
              },
              "optional": false,
              "computed": false,
              "start": 104,
              "end": 129
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 150,
                          "end": 155
                        },
                        "property": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Symbol",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 156,
                            "end": 162
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "isConcatSpreadable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 163,
                            "end": 181
                          },
                          "optional": false,
                          "computed": false,
                          "start": 156,
                          "end": 181
                        },
                        "optional": false,
                        "computed": true,
                        "start": 150,
                        "end": 182
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 150,
                      "end": 184
                    },
                    "start": 143,
                    "end": 185
                  }
                ],
                "start": 133,
                "end": 191
              },
              "expression": false,
              "start": 130,
              "end": 191
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 103,
            "end": 191
          }
        ],
        "start": 97,
        "end": 193
      },
      "abstract": false,
      "declare": false,
      "start": 75,
      "end": 193
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 193
}
```
