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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 21,
          "end": 35,
          "argument": {
            "type": "Identifier",
            "start": 24,
            "end": 28,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 36,
        "end": 41,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 38,
          "end": 41
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 48,
      "end": 120,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 63,
        "end": 120,
        "id": {
          "type": "Identifier",
          "start": 69,
          "end": 70,
          "name": "D",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 71,
          "end": 120,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 77,
              "end": 90,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 88,
                "end": 89,
                "value": 0,
                "raw": "0"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 95,
              "end": 101,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 95,
                "end": 96,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 99,
                "end": 100,
                "value": 1,
                "raw": "1"
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 106,
              "end": 118,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 106,
                "end": 112,
                "name": "method",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 112,
                "end": 118,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 115,
                  "end": 118,
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
        "decorators": [
          {
            "type": "Decorator",
            "start": 43,
            "end": 47,
            "expression": {
              "type": "Identifier",
              "start": 44,
              "end": 47,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
