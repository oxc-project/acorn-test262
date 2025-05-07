__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 42,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 21,
          "end": 35,
          "argument": {
            "type": "Identifier",
            "start": 24,
            "end": 28,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 35,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 30,
              "end": 35,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 30,
                "end": 33
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 36,
        "end": 41,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 38,
          "end": 41
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 48,
      "end": 120,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 63,
        "end": 120,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 71,
          "end": 120,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 77,
              "end": 90,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 88,
                "end": 89,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 95,
              "end": 101,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 95,
                "end": 96,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 99,
                "end": 100,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 106,
              "end": 118,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 106,
                "end": 112,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 112,
                "end": 118,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 115,
                  "end": 118,
                  "body": []
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
        "decorators": [
          {
            "type": "Decorator",
            "start": 43,
            "end": 47,
            "expression": {
              "type": "Identifier",
              "start": 44,
              "end": 47,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 69,
          "end": 70,
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
