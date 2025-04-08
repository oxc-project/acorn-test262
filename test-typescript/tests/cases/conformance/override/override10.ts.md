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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 19,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 78,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 26,
            "end": 50,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 38,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 38,
              "end": 50,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 55,
            "end": 76,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 67,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 67,
              "end": 76,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 80,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 98,
        "name": "Sub",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 107,
        "end": 111,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 112,
        "end": 166,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 118,
            "end": 150,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 139,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 139,
              "end": 150,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
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
            },
            "decorators": [],
            "override": true,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 155,
            "end": 164,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 158,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 158,
              "end": 164,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 161,
                "end": 164,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
