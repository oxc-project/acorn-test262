__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 13
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 22
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "_sym",
                "raw": "\"_sym\"",
                "start": 23,
                "end": 29
              }
            ],
            "optional": false,
            "start": 16,
            "end": 30
          },
          "definite": false,
          "start": 6,
          "end": 30
        }
      ],
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 45,
          "end": 52
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
                "start": 59,
                "end": 70
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
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 83,
                            "end": 87
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_symbol",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 88,
                            "end": 95
                          },
                          "optional": false,
                          "computed": true,
                          "start": 83,
                          "end": 96
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 99,
                                "end": 103
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_symbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 104,
                                "end": 111
                              },
                              "optional": false,
                              "computed": true,
                              "start": 99,
                              "end": 112
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "bind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 113,
                              "end": 117
                            },
                            "optional": false,
                            "computed": false,
                            "start": 99,
                            "end": 117
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 118,
                              "end": 122
                            }
                          ],
                          "optional": false,
                          "start": 99,
                          "end": 123
                        },
                        "start": 83,
                        "end": 123
                      },
                      "directive": null,
                      "start": 83,
                      "end": 124
                    }
                  ],
                  "start": 73,
                  "end": 130
                },
                "expression": false,
                "start": 70,
                "end": 130
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 59,
              "end": 130
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "_symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 150
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": true,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 154,
                  "end": 157
                },
                "expression": false,
                "start": 151,
                "end": 157
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 136,
              "end": 157
            }
          ],
          "start": 53,
          "end": 159
        },
        "abstract": false,
        "declare": false,
        "start": 39,
        "end": 159
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 32,
      "end": 159
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 159
}
```
