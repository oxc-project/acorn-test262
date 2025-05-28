__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 142,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 122,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 15,
        "decorators": [],
        "name": "SomeClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 122,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 22,
            "end": 77,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 41,
              "decorators": [],
              "name": "someProp",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 41,
              "end": 77,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 43,
                "end": 51,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 45,
                  "end": 51
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 77,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 62,
                    "end": 71,
                    "argument": {
                      "type": "Literal",
                      "start": 69,
                      "end": 70,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 83,
            "end": 120,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 102,
              "decorators": [],
              "name": "someProp",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 102,
              "end": 120,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 103,
                  "end": 116,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 108,
                    "end": 116,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 110,
                      "end": 116
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 120,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSExportAssignment",
      "start": 123,
      "end": 142,
      "expression": {
        "type": "Identifier",
        "start": 132,
        "end": 141,
        "decorators": [],
        "name": "SomeClass",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
