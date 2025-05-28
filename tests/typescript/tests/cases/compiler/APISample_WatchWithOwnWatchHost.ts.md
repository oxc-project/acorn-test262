__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 221,
  "end": 2048,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 221,
      "end": 246,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 233,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 245,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 245,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 242,
                "end": 245
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 248,
      "end": 282,
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 257,
        "decorators": [],
        "name": "ts",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 260,
        "end": 281,
        "expression": {
          "type": "Literal",
          "start": 268,
          "end": 280,
          "value": "typescript",
          "raw": "\"typescript\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 284,
      "end": 2034,
      "id": {
        "type": "Identifier",
        "start": 293,
        "end": 302,
        "decorators": [],
        "name": "watchMain",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 305,
        "end": 2034,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 365,
            "end": 392,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 371,
                "end": 391,
                "id": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 386,
                  "decorators": [],
                  "name": "files",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 376,
                    "end": 386,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 378,
                      "end": 386,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 378,
                        "end": 384
                      }
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 389,
                  "end": 391,
                  "elements": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 397,
            "end": 436,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 403,
                "end": 435,
                "id": {
                  "type": "Identifier",
                  "start": 403,
                  "end": 430,
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 410,
                    "end": 430,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 412,
                      "end": 430,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 412,
                        "end": 430,
                        "left": {
                          "type": "Identifier",
                          "start": 412,
                          "end": 414,
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 415,
                          "end": 430,
                          "decorators": [],
                          "name": "CompilerOptions",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 433,
                  "end": 435,
                  "properties": []
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 442,
            "end": 1210,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 448,
                "end": 1209,
                "id": {
                  "type": "Identifier",
                  "start": 448,
                  "end": 518,
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 452,
                    "end": 518,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 454,
                      "end": 518,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 454,
                        "end": 499,
                        "left": {
                          "type": "Identifier",
                          "start": 454,
                          "end": 456,
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 457,
                          "end": 499,
                          "decorators": [],
                          "name": "WatchCompilerHostOfFilesAndCompilerOptions",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 499,
                        "end": 518,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 500,
                            "end": 517,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 500,
                              "end": 517,
                              "left": {
                                "type": "Identifier",
                                "start": 500,
                                "end": 502,
                                "decorators": [],
                                "name": "ts",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 503,
                                "end": 517,
                                "decorators": [],
                                "name": "BuilderProgram",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 521,
                  "end": 1209,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 531,
                      "end": 547,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 531,
                        "end": 540,
                        "decorators": [],
                        "name": "rootFiles",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 542,
                        "end": 547,
                        "decorators": [],
                        "name": "files",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 557,
                      "end": 564,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 557,
                        "end": 564,
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 557,
                        "end": 564,
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 575,
                      "end": 640,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 575,
                        "end": 600,
                        "decorators": [],
                        "name": "useCaseSensitiveFileNames",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 602,
                        "end": 640,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "MemberExpression",
                          "start": 608,
                          "end": 640,
                          "object": {
                            "type": "MemberExpression",
                            "start": 608,
                            "end": 614,
                            "object": {
                              "type": "Identifier",
                              "start": 608,
                              "end": 610,
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 611,
                              "end": 614,
                              "decorators": [],
                              "name": "sys",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 615,
                            "end": 640,
                            "decorators": [],
                            "name": "useCaseSensitiveFileNames",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 650,
                      "end": 682,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 650,
                        "end": 660,
                        "decorators": [],
                        "name": "getNewLine",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 662,
                        "end": 682,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "MemberExpression",
                          "start": 668,
                          "end": 682,
                          "object": {
                            "type": "MemberExpression",
                            "start": 668,
                            "end": 674,
                            "object": {
                              "type": "Identifier",
                              "start": 668,
                              "end": 670,
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 671,
                              "end": 674,
                              "decorators": [],
                              "name": "sys",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 675,
                            "end": 682,
                            "decorators": [],
                            "name": "newLine",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 692,
                      "end": 739,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 692,
                        "end": 711,
                        "decorators": [],
                        "name": "getCurrentDirectory",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 713,
                        "end": 739,
                        "object": {
                          "type": "MemberExpression",
                          "start": 713,
                          "end": 719,
                          "object": {
                            "type": "Identifier",
                            "start": 713,
                            "end": 715,
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 716,
                            "end": 719,
                            "decorators": [],
                            "name": "sys",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 720,
                          "end": 739,
                          "decorators": [],
                          "name": "getCurrentDirectory",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 749,
                      "end": 816,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 749,
                        "end": 770,
                        "decorators": [],
                        "name": "getDefaultLibFileName",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 772,
                        "end": 816,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 772,
                            "end": 779,
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "start": 783,
                          "end": 816,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 783,
                            "end": 807,
                            "object": {
                              "type": "Identifier",
                              "start": 783,
                              "end": 785,
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 786,
                              "end": 807,
                              "decorators": [],
                              "name": "getDefaultLibFilePath",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 808,
                              "end": 815,
                              "decorators": [],
                              "name": "options",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 827,
                      "end": 856,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 827,
                        "end": 837,
                        "decorators": [],
                        "name": "fileExists",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 839,
                        "end": 856,
                        "object": {
                          "type": "MemberExpression",
                          "start": 839,
                          "end": 845,
                          "object": {
                            "type": "Identifier",
                            "start": 839,
                            "end": 841,
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 842,
                            "end": 845,
                            "decorators": [],
                            "name": "sys",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 846,
                          "end": 856,
                          "decorators": [],
                          "name": "fileExists",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 866,
                      "end": 891,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 866,
                        "end": 874,
                        "decorators": [],
                        "name": "readFile",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 876,
                        "end": 891,
                        "object": {
                          "type": "MemberExpression",
                          "start": 876,
                          "end": 882,
                          "object": {
                            "type": "Identifier",
                            "start": 876,
                            "end": 878,
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 879,
                            "end": 882,
                            "decorators": [],
                            "name": "sys",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 883,
                          "end": 891,
                          "decorators": [],
                          "name": "readFile",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 901,
                      "end": 940,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 901,
                        "end": 916,
                        "decorators": [],
                        "name": "directoryExists",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 918,
                        "end": 940,
                        "object": {
                          "type": "MemberExpression",
                          "start": 918,
                          "end": 924,
                          "object": {
                            "type": "Identifier",
                            "start": 918,
                            "end": 920,
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 921,
                            "end": 924,
                            "decorators": [],
                            "name": "sys",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 925,
                          "end": 940,
                          "decorators": [],
                          "name": "directoryExists",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 950,
                      "end": 987,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 950,
                        "end": 964,
                        "decorators": [],
                        "name": "getDirectories",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 966,
                        "end": 987,
                        "object": {
                          "type": "MemberExpression",
                          "start": 966,
                          "end": 972,
                          "object": {
                            "type": "Identifier",
                            "start": 966,
                            "end": 968,
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 969,
                            "end": 972,
                            "decorators": [],
                            "name": "sys",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 973,
                          "end": 987,
                          "decorators": [],
                          "name": "getDirectories",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 997,
                      "end": 1032,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 997,
                        "end": 1010,
                        "decorators": [],
                        "name": "readDirectory",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 1012,
                        "end": 1032,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1012,
                          "end": 1018,
                          "object": {
                            "type": "Identifier",
                            "start": 1012,
                            "end": 1014,
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1015,
                            "end": 1018,
                            "decorators": [],
                            "name": "sys",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1019,
                          "end": 1032,
                          "decorators": [],
                          "name": "readDirectory",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1042,
                      "end": 1067,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1042,
                        "end": 1050,
                        "decorators": [],
                        "name": "realpath",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 1052,
                        "end": 1067,
                        "object": {
                          "type": "MemberExpression",
                          "start": 1052,
                          "end": 1058,
                          "object": {
                            "type": "Identifier",
                            "start": 1052,
                            "end": 1054,
                            "decorators": [],
                            "name": "ts",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1055,
                            "end": 1058,
                            "decorators": [],
                            "name": "sys",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1059,
                          "end": 1067,
                          "decorators": [],
                          "name": "realpath",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1078,
                      "end": 1106,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1078,
                        "end": 1087,
                        "decorators": [],
                        "name": "watchFile",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "TSNonNullExpression",
                        "start": 1089,
                        "end": 1106,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 1089,
                          "end": 1105,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1089,
                            "end": 1095,
                            "object": {
                              "type": "Identifier",
                              "start": 1089,
                              "end": 1091,
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1092,
                              "end": 1095,
                              "decorators": [],
                              "name": "sys",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1096,
                            "end": 1105,
                            "decorators": [],
                            "name": "watchFile",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1116,
                      "end": 1154,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1116,
                        "end": 1130,
                        "decorators": [],
                        "name": "watchDirectory",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "TSNonNullExpression",
                        "start": 1132,
                        "end": 1154,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 1132,
                          "end": 1153,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1132,
                            "end": 1138,
                            "object": {
                              "type": "Identifier",
                              "start": 1132,
                              "end": 1134,
                              "decorators": [],
                              "name": "ts",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1135,
                              "end": 1138,
                              "decorators": [],
                              "name": "sys",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1139,
                            "end": 1153,
                            "decorators": [],
                            "name": "watchDirectory",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 1164,
                      "end": 1203,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 1164,
                        "end": 1177,
                        "decorators": [],
                        "name": "createProgram",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 1179,
                        "end": 1203,
                        "object": {
                          "type": "Identifier",
                          "start": 1179,
                          "end": 1181,
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1182,
                          "end": 1203,
                          "decorators": [],
                          "name": "createAbstractBuilder",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1422,
            "end": 1467,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1428,
                "end": 1466,
                "id": {
                  "type": "Identifier",
                  "start": 1428,
                  "end": 1445,
                  "decorators": [],
                  "name": "origCreateProgram",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1448,
                  "end": 1466,
                  "object": {
                    "type": "Identifier",
                    "start": 1448,
                    "end": 1452,
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1453,
                    "end": 1466,
                    "decorators": [],
                    "name": "createProgram",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1472,
            "end": 1679,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1472,
              "end": 1679,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1472,
                "end": 1490,
                "object": {
                  "type": "Identifier",
                  "start": 1472,
                  "end": 1476,
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1477,
                  "end": 1490,
                  "decorators": [],
                  "name": "createProgram",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "start": 1493,
                "end": 1679,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1494,
                    "end": 1503,
                    "decorators": [],
                    "name": "rootNames",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1505,
                    "end": 1512,
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1514,
                    "end": 1518,
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1520,
                    "end": 1530,
                    "decorators": [],
                    "name": "oldProgram",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1535,
                  "end": 1679,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 1545,
                      "end": 1601,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1545,
                        "end": 1600,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1545,
                          "end": 1556,
                          "object": {
                            "type": "Identifier",
                            "start": 1545,
                            "end": 1552,
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1553,
                            "end": 1556,
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1557,
                            "end": 1599,
                            "value": "** We're about to create the program! **",
                            "raw": "\"** We're about to create the program! **\""
                          }
                        ],
                        "optional": false
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1610,
                      "end": 1673,
                      "argument": {
                        "type": "CallExpression",
                        "start": 1617,
                        "end": 1672,
                        "callee": {
                          "type": "Identifier",
                          "start": 1617,
                          "end": 1634,
                          "decorators": [],
                          "name": "origCreateProgram",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1635,
                            "end": 1644,
                            "decorators": [],
                            "name": "rootNames",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "Identifier",
                            "start": 1646,
                            "end": 1653,
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "Identifier",
                            "start": 1655,
                            "end": 1659,
                            "decorators": [],
                            "name": "host",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "Identifier",
                            "start": 1661,
                            "end": 1671,
                            "decorators": [],
                            "name": "oldProgram",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      }
                    }
                  ]
                },
                "id": null,
                "generator": false
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1684,
            "end": 1738,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1690,
                "end": 1737,
                "id": {
                  "type": "Identifier",
                  "start": 1690,
                  "end": 1711,
                  "decorators": [],
                  "name": "origPostProgramCreate",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 1714,
                  "end": 1737,
                  "object": {
                    "type": "Identifier",
                    "start": 1714,
                    "end": 1718,
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1719,
                    "end": 1737,
                    "decorators": [],
                    "name": "afterProgramCreate",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1744,
            "end": 1892,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1744,
              "end": 1891,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 1744,
                "end": 1767,
                "object": {
                  "type": "Identifier",
                  "start": 1744,
                  "end": 1748,
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1749,
                  "end": 1767,
                  "decorators": [],
                  "name": "afterProgramCreate",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "start": 1770,
                "end": 1891,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1770,
                    "end": 1777,
                    "decorators": [],
                    "name": "program",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1781,
                  "end": 1891,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 1791,
                      "end": 1844,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1791,
                        "end": 1843,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1791,
                          "end": 1802,
                          "object": {
                            "type": "Identifier",
                            "start": 1791,
                            "end": 1798,
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1799,
                            "end": 1802,
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1803,
                            "end": 1842,
                            "value": "** We finished making the program! **",
                            "raw": "\"** We finished making the program! **\""
                          }
                        ],
                        "optional": false
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 1853,
                      "end": 1885,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1853,
                        "end": 1884,
                        "callee": {
                          "type": "TSNonNullExpression",
                          "start": 1853,
                          "end": 1875,
                          "expression": {
                            "type": "Identifier",
                            "start": 1853,
                            "end": 1874,
                            "decorators": [],
                            "name": "origPostProgramCreate",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1876,
                            "end": 1883,
                            "decorators": [],
                            "name": "program",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false
                      },
                      "directive": null
                    }
                  ]
                },
                "id": null,
                "generator": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2004,
            "end": 2032,
            "expression": {
              "type": "CallExpression",
              "start": 2004,
              "end": 2031,
              "callee": {
                "type": "MemberExpression",
                "start": 2004,
                "end": 2025,
                "object": {
                  "type": "Identifier",
                  "start": 2004,
                  "end": 2006,
                  "decorators": [],
                  "name": "ts",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2007,
                  "end": 2025,
                  "decorators": [],
                  "name": "createWatchProgram",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2026,
                  "end": 2030,
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2036,
      "end": 2048,
      "expression": {
        "type": "CallExpression",
        "start": 2036,
        "end": 2047,
        "callee": {
          "type": "Identifier",
          "start": 2036,
          "end": 2045,
          "decorators": [],
          "name": "watchMain",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
