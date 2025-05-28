__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 159,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 30,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 13,
            "decorators": [],
            "name": "_symbol",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 16,
            "end": 30,
            "callee": {
              "type": "Identifier",
              "start": 16,
              "end": 22,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 23,
                "end": 29,
                "value": "_sym",
                "raw": "\"_sym\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 159,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 39,
        "end": 159,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 45,
          "end": 52,
          "decorators": [],
          "name": "MyClass",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 53,
          "end": 159,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 59,
              "end": 130,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 59,
                "end": 70,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 70,
                "end": 130,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 73,
                  "end": 130,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 83,
                      "end": 124,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 83,
                        "end": 123,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 83,
                          "end": 96,
                          "object": {
                            "type": "ThisExpression",
                            "start": 83,
                            "end": 87
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 88,
                            "end": 95,
                            "decorators": [],
                            "name": "_symbol",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": true
                        },
                        "right": {
                          "type": "CallExpression",
                          "start": 99,
                          "end": 123,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 99,
                            "end": 117,
                            "object": {
                              "type": "MemberExpression",
                              "start": 99,
                              "end": 112,
                              "object": {
                                "type": "ThisExpression",
                                "start": 99,
                                "end": 103
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 104,
                                "end": 111,
                                "decorators": [],
                                "name": "_symbol",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": true
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 113,
                              "end": 117,
                              "decorators": [],
                              "name": "bind",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ThisExpression",
                              "start": 118,
                              "end": 122
                            }
                          ],
                          "optional": false
                        }
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
            },
            {
              "type": "MethodDefinition",
              "start": 136,
              "end": 157,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 143,
                "end": 150,
                "decorators": [],
                "name": "_symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "FunctionExpression",
                "start": 151,
                "end": 157,
                "id": null,
                "generator": false,
                "async": true,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 154,
                  "end": 157,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": true,
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
