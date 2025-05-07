__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 193,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 73,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 73,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 71,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 17,
              "end": 42,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 17,
                "end": 23,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 24,
                "end": 42,
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 43,
              "end": 71,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 71,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 56,
                    "end": 65,
                    "argument": {
                      "type": "Literal",
                      "start": 63,
                      "end": 64,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
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
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 75,
      "end": 193,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 97,
        "end": 193,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 103,
            "end": 191,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 104,
              "end": 129,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 104,
                "end": 110,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 111,
                "end": 129,
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 130,
              "end": 191,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 133,
                "end": 191,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 143,
                    "end": 185,
                    "argument": {
                      "type": "CallExpression",
                      "start": 150,
                      "end": 184,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 150,
                        "end": 182,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 150,
                          "end": 155
                        },
                        "optional": false,
                        "property": {
                          "type": "MemberExpression",
                          "start": 156,
                          "end": 181,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 156,
                            "end": 162,
                            "decorators": [],
                            "name": "Symbol",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 163,
                            "end": 181,
                            "decorators": [],
                            "name": "isConcatSpreadable",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
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
        "start": 81,
        "end": 84,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 93,
        "end": 96,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
