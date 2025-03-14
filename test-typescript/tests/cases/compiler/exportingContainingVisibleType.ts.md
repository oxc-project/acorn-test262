exportingContainingVisibleType.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 161,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 140,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 140,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 138,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 30,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 138,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 33,
                "end": 138,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 43,
                    "end": 54,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 47,
                        "end": 53,
                        "definite": false,
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
                                "optional": false
                              }
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
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
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 143,
      "end": 160,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 150,
        "end": 160,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 154,
            "end": 159,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 158,
              "end": 159,
              "raw": "5",
              "value": 5
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
