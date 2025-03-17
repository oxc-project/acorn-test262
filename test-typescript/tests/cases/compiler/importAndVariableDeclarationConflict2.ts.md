__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "m",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 33,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 13,
            "end": 31,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 20,
              "end": 31,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 24,
                  "end": 30,
                  "id": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 25,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 28,
                    "end": 30,
                    "value": "",
                    "raw": "''"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 35,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 46,
        "end": 49,
        "left": {
          "type": "Identifier",
          "start": 46,
          "end": 47,
          "name": "m",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 48,
          "end": 49,
          "name": "m",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 60,
        "end": 100,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 64,
            "end": 98,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 74,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 74,
              "end": 98,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 77,
                "end": 98,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 83,
                    "end": 94,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 87,
                        "end": 93,
                        "id": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 88,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 91,
                          "end": 93,
                          "value": "",
                          "raw": "''"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
