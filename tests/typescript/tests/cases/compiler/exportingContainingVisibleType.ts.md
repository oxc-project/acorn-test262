__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 160,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 140,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 140,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 138,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 138,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 138,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 43,
                    "end": 54,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 47,
                        "end": 53,
                        "id": {
                          "type": "Identifier",
                          "start": 47,
                          "end": 53,
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 48,
                            "end": 53,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 50,
                              "end": 53,
                              "typeName": {
                                "type": "Identifier",
                                "start": 50,
                                "end": 53,
                                "decorators": [],
                                "name": "Foo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 63,
                    "end": 72,
                    "argument": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 71,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 143,
      "end": 160,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 150,
        "end": 160,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 154,
            "end": 159,
            "id": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 158,
              "end": 159,
              "value": 5,
              "raw": "5"
            },
            "definite": false
          }
        ],
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
