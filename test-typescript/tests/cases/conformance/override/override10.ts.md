__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 166,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 78,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 78,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 26,
            "end": 50,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 38,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 38,
              "end": 50,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 40,
                "end": 49,
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 42,
                  "end": 49
                }
              }
            }
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 55,
            "end": 76,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 67,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 67,
              "end": 76,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 69,
                "end": 75,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 71,
                  "end": 75
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 19,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 80,
      "end": 166,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 112,
        "end": 166,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 118,
            "end": 150,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 139,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": true,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 139,
              "end": 150,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 141,
                "end": 149,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 143,
                  "end": 149
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 155,
            "end": 164,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 158,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 158,
              "end": 164,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 161,
                "end": 164,
                "body": []
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
        "start": 95,
        "end": 98,
        "decorators": [],
        "name": "Sub",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 107,
        "end": 111,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
